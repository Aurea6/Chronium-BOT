const client = require("../../index")
let emo = require("../../emojis")
const moment = require("moment")
const { MessageEmbed } = require("discord.js")

const AFKS = require("../../schemas/afk")

const prettyMilliseconds = require('pretty-ms');

client.on('messageCreate', async(message) => {

  if(!message.guild || message.author.bot) return;

  const ping = message.mentions.members.first();
  if(ping) {
    let data;
    try {
      data = await AFKS.findOne({
            userId: message.mentions.members.first().id,
            guildId: message.guild.id
        })
    } catch (e) {
      console.error(e)
    }

    if(data) {
      let timestamp = data.time;
      let reason = data.AFK_Reason;
      const timeAgo = prettyMilliseconds(Math.floor(Date.now() - data.time), {verbose: true, compact: true})
      
      let embed = new MessageEmbed()
      .setTitle(`${ping.user.username} is currently afk`)
      .setDescription(`${ping} is afk! (${timeAgo})\n> Reason: ${reason}`)
      .setColor("#f4c2c2")
      .setThumbnail(ping.user.displayAvatarURL({dynamic:true}))
      message.channel.send({embeds: [embed]}).then(sentMessage => {
        setTimeout(() => sentMessage.delete(), 15000)
      })
    }
  }

  let getData;
  try {
    getData = await AFKS.findOne({
            userId: message.author.id,
            guildId: message.guild.id
        })
  } catch (e) {
    console.error()
  }
  if(getData) {
    let data = getData;
    let timestamp = data.time
    let reason = data.AFK_Reason
    const timeAgo = prettyMilliseconds(Math.floor(Date.now() - getData.time), {verbose: true, compact: true})
    let embed = new MessageEmbed()
    .setTitle(`AFK removed`)
    .setDescription(`Welcome back, **${message.author.username}**!`)
    .addField(`Afk:`, `> AFK for: **${timeAgo}**\n> **Reason: **${reason}`)
    .setColor("f4c2c2")
    if(message.content.toLowerCase().startsWith(",afk")) return;
    let deletedData;
    try {
      deletedData = await AFKS.deleteOne({
        userId: message.author.id,
        guildId: message.guild.id
      })
    } catch (e) {
      console.error(e)
    }
    let nick = message.member.displayName.replace("[AFK]", "")
    let afkRole = message.guild.roles.cache.find(role => role.name === 'AFK');
    message.reply({embeds: [embed]})
    if(!afkRole) return;
    message.member.roles.remove(afkRole)

    if(message.author.id == message.guild.ownerId) return;
    message.member.setNickname(nick)
  }
  })