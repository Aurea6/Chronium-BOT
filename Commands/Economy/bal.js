let currency = require(`../../schemas/economy`) 
const emoji = require("../../emojis")
const {MessageEmbed} = require("discord.js") 
module.exports = {
  name: "bal",
  aliases: ["balance"],
  premium: true,
  run: async( client, message, args) => {

const member = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

const usericon = member.user.avatarURL;
let profile; 
    try {
      profile = await currency.findOne({
        userID: member.id,
      })
      if(!profile) {
        
        if(member.user.bot) return message.channel.send(`Bots have more cash than you ;-;`)
        profile = await currency.create({
          userID: member.id,
          coins: 500,
          bank: 0
        })
        profile.save()
      }

const pembed = new MessageEmbed()
  .setTitle(`${member.user.username} Balance`)
      .setDescription(`Wallet: ⏣${profile.coins}\nBank: ⏣${profile.bank}/${profile.maxBank}`)
      .setColor("#F4C2C2")
      .setThumbnail("https://cdn.discordapp.com/emojis/873550081159233586.gif?size=160")
      message.channel.send({embeds: [pembed]})
    } catch (e) {
      console.error(e)
    } 
}} 
