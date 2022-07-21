const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');

module.exports = {
    name: 'roll',
    category: "category",
    description: 'description',
    usage: 'usage',
    aliases: ["gamble", "bet"],
    timeout: 0,
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
          bank: 0,
          maxBank: 500
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }

    let bot = Math.floor(Math.random() * (6 - 1) + 1)
    let player = Math.floor(Math.random() * (6 - 1) + 1)

    if(!args[0]) return message.channel.send(`Specify amount to bet!`)

    let bet;

    if(isNaN(args[0])) {
      if(args[0] !== 'all' || args[0] !== 'max') {
        return message.channel.send(`Please specify a valid amount!`)
      } else {
        bet = profile.coins
      }
    } else {
      bet = Number(args[0])
    }

    if(bet < 200) return message.channel.send(`You can't bet less than **⏣200**!`)

    let sendEmbed = (winorloose) => {
      let embed = new MessageEmbed()
      .setTitle(winorloose !== 'tied' ? `You ${winorloose}` : 'Its a tie!')
      .setDescription(`>  You ${winorloose} the game and ${winorloose == 'won' ? `got **⏣${bet * 2}**` : winorloose == 'lost' ? `paid **⏣${bet}**` : `you got your **⏣${bet}** back`}`)
      .addField(`You rolled:`, `\`\`\`\n${player}\`\`\``, true)
      .addField(`I rolled:`, `\`\`\`\n${bot}\`\`\``, true)
      .setFooter(message.author.username)
      .setTimestamp()
      .setColor(`${winorloose == 'won' ? 'GREEN' : winorloose == 'lost' ? "RED" : Color}`)
      return message.channel.send({embeds: [embed]})
    }

    if(bot > player) {
      sendEmbed('lost')
      await eco.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -bet
        }
      })
    } else if(player > bot) {
      sendEmbed('won')
      let amount = Math.floor(bet * 2)
      await eco.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: amount
        }
      })
    } else if(player == bot) {
      sendEmbed(`tied`)
    }

}
      }