const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');

module.exports = {
    name: 'rich',
    category: "economy",
    description: 'check whos the richest person in the server',
    usage: '?rich [top]',
    aliases: ['richest', 'richlb'],
    timeout: 10,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {
    let profile;
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
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

    let find = await eco.find()

    find = find.filter(value => message.guild.members.cache.get(value.userID)).sort((a, b) => {
      return b.coins - a.coins
    })

    let top;
    if(!isNaN(args[0])) {
      top = args[0]
    } else {
      if(args[0] !== 'all') {
      top = 10
      } else {
        top = find.length
      }
    }

    let mapped  = find.map((value, index) => {
      return `\`(#${index+1})\` **⏣ ${number(value.coins)}** | ${client.users.cache.get(value.userID).tag}`
    })

    let test = mapped.filter(value => {
      return value.includes(message.author.tag)
    })

    let place = Number(test.join().slice(3, 4))

    let desc = mapped.slice(0, top).join("\n").replace("\`(#1)\`", `<:dv_itPepeCrownOwO:910511246640578600> `).replace("\`(#2)\`", `<a:hydroxTrophy:910510754673852426> `).replace("\`(#3)\`", `<a:hb_pepemedal:910510824467099679> `)

    let embed = new MessageEmbed()
    .setTitle(`**Top ${top}** richest users in ${message.guild.name}`)
    .setDescription(`\n\n${desc}`)
    .setColor(Color)
    
    .setTimestamp()

    message.channel.send({embeds: [embed]})

}
          }