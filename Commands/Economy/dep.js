const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const math = require('mathjs');
const Color = `#ffcc00`

let emo = require("../../emojis")
let number = require("../../function/numbers")
let eco = require("../../schemas/economy");

module.exports = {
    name: 'deposit',
    category: "economy",
    description: 'deposit some money to your bank!',
    usage: '?deposit <amount>',
    aliases: ['dep'],
    timeout: 2,
    boostersOnly: false,
    run : async (client, message, args) => {
     
    let profile;

    try {
      profile = await eco.findOne({
        userID: message.author.id
      })

      if(!profile) {
        if(message.author.bot) return;
        profile = await eco.create({
          userID: message.author.id,
          coins: 500,
          bank: 0,
          maxBank: 1000
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }

    if(profile) {

    if(!args[0]) return message.channel.send(`:x: | specify the amount you want to deposit!`)

    let amount;

    if(profile.maxBank == profile.bank) return message.channel.send(`Your bank is full!`)

    if(isNaN(args[0])) {
      if(args[0] == 'max' || args[0] == 'all') {
        if(profile.coins > profile.maxBank) {
          amount = profile.maxBank - profile.bank
        } else {
          amount = profile.coins
        }
    } else {
      return message.channel.send(`u must deposite a number or \`max\` to deposite all`)
    }
    } else {
      if(args[0] > profile.coins) {
        amount = profile.coins
      } else {
        if(args[0] > profile.maxBank) {
          amount = profile.maxBank
        } else {
          if(args[0] <= profile.coins && !isNaN(args[0])) {
          amount = args[0]
        }
      }
    }
    }

  try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    let updatedBank = math.floor(profile.bank + Number(amount))

    message.channel.send(`Deposited \`⏣${number(amount)}\`! your bank is now \`⏣${number(updatedBank)}\``);
    } else {
      return message.channel.send(`:x: | error! try again!!`)
    }

}
         }