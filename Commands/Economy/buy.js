const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
const inventory = require("../../schemas/inv")
const items = require("../../economy/shop")

module.exports = {
    name: 'buy',
    category: "economy",
    description: 'buy an item in the shop',
    usage: '?buy <item name> <amount>',
    aliases: [],
    timeout: 0,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {
     
    if(!args[0]) return message.channel.send(`:x: | Specify the item you want to buy!`)

    let itemToBuy = args[0]
    const validItem = !!items.find((val) => val.items.toLowerCase() === itemToBuy)

    if(!validItem) return message.channel.send(`Couldn't find **${args.join(" ")}** in the shop!`)

    if(items.find((val) => (val.items.toLowerCase()) === itemToBuy).price.buy === 0 && message.author.id !== '768362780545384449') return message.channel.send(`This item is not purchasable`)

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

    let itemPrice = items.find((val) => (val.items.toLowerCase()) === itemToBuy).price.buy

    let amountToBuy;
    if(args[1]) {
      if(isNaN(args[1])) {
        if(args[1] == 'all') {
          amountToBuy = Math.floor((profile.coins) / itemPrice)
        } else {
          amountToBuy = 1
        }
      } else {
        amountToBuy = Number(args[1])
      }
    } else {
      amountToBuy = 1
    }

    itemPrice = itemPrice * amountToBuy

    const userBalance = profile.coins;
    if(userBalance < itemPrice) return message.channel.send(`You dont have enough coins to buy this!`)

    const params = {
      User: message.author.id
    }

    function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
      }
    }

      return JSON.stringify(obj) === JSON.stringify({});
    }

    inventory.findOne(params, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
        if(!hasItem) {
          data.Inventory[itemToBuy] = amountToBuy;
        } else {
          data.Inventory[itemToBuy] = data.Inventory[itemToBuy] + amountToBuy;
        }
        await inventory.findOneAndUpdate(params, data)
      } else {
        new inventory({
          User: message.author.id,
          Inventory: {[itemToBuy]: amountToBuy}
        }).save()
      }
      message.reply(`You bought **${amountToBuy} ${itemToBuy}** for **⏣${number(itemPrice)}**!`)
      try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -itemPrice,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    })

}
}