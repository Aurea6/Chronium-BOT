const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const math = require('mathjs');

const Color = `#ffcc00`

let emo = require("../../emojis")
let number = require("../../function/numbers")
let eco = require("../../schemas/economy");

module.exports = {
    name: 'withdraw',
    category: "economy",
    description: 'withdraw your money from the bank!',
    usage: '?with <amount>',
    aliases: ['with'],
    timeout: 1,
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

    if(!args[0]) return message.channel.send(`:x: | specify the amount you want to withdraw!`)

    let amount;

    if(profile.bank == 0) return message.channel.send(`Your bank is empty!`)

    if(isNaN(args[0])) {
      if(args[0] == 'max' || args[0] == 'all') {
      amount = profile.bank
    } else {
      return message.channel.send(`u must deposite a number or \`max\` to deposite all`)
    }
    } else {
      if(args[0] > profile.bank) {
        amount = profile.bank
      } else {
          amount = Number(args[0])
      }
    }

  try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    let updatedBank = math.evaluate(profile.bank - Number(amount))

    console.log(amount)

    message.channel.send(`Withdrawn \`⏣${number(amount)}\`! your bank is now \`⏣${number(updatedBank)}\``);
    } else {
      return message.channel.send(`:x: | error! try again!!`)
    }
}
        }