const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffcc00`

let moment = require("moment")



const schema = require('../../schemas/afk')

module.exports = {
    name: 'afk',
    category: "utility",
    description: 'set ur afk so everyone know y u not responding',
    usage: '?afk <reason>',
    aliases: [],
    timeout: 0,
    run : async (client, message, args) => {

    if(message.member.permissions.has('ADMINISTRATOR')) member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(!message.member.permissions.has('ADMINISTRATOR')) member = message.member;

      let unix = Math.floor(new Date().getTime()/1000.0)

      let afkAt = `<t:${unix}>`
     
    const reason = args.join(" ") || "No reason specified"

    if(reason.length >= 900) return message.channel.send(":x: | the reason is too long!")

    let data;
    try {
      data = await schema.findOne({
        userId: member.id,
        guildId: message.guild.id,
      })
      if(data) return;
      if(!data) {
            data = await schema.create({
                userId: member.id,
                guildId: message.guild.id,
                time: Date.now()
            })
      }
    } catch (e) {
      console.error(e)
    }

    data.AFK = true
    data.AFK_Reason = reason;

    await data.save();

    let embed = new MessageEmbed()
    .setTitle(`${member.user.username} is now AFK`)
    .addField(`Set your AFK!`, `> **Reason: **${reason}\n> **Afk at: **${afkAt}`)
    .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
    .setColor("f4c2c2")
    .setTimestamp()
    .setFooter(message.author.tag)
    message.reply({embeds: [embed]})

    let afkRole = message.guild.roles.cache.find(role => role.name === 'AFK');
    if(!afkRole) return;
    member.roles.add(afkRole)

    if(message.author.id == message.guild.ownerId) return;
    else return member.setNickname(`${member.displayName} [AFK]`)
    

}
      }