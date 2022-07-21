const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let emo = require("../../emojis")
let number = require("../../function/numbers")
const eco = require('../../schemas/economy');

module.exports = {
    name: 'daily',
    category: "economy",
    description: 'claim your daily rewards',
    usage: '?daily',
    aliases: [],
    timeout: 86400,
    boostersOnly: false,
    cooldownMsg: {title: `U already claimed the rewards`, description: `**Next reward in [timeleft]**`, color: "RED"},  run : async (client, message, args) => {
     const member = message.member; 
    let profile; 
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        if(member.user.bot) return message.channel.send(`Bots dont have bal`)
        profile = await eco.create({
          userID: message.author.id,
          coins: 500,
          bank: 0
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }

    let amount = 25000

    if(profile) {
      await eco.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: amount
        }
      })
      let embed = new MessageEmbed()
      .setTitle(`Daily Rewards!`)
      .setDescription(`${message.author.username}, you got **⏣${number(amount)}**!`)
      .setFooter(`Come back tomorow!`)
      .setTimestamp()
      .setColor(`GREEN`)
      message.channel.send({embeds: [embed]})
    }

}
          }