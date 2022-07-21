const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
const inventory = require("../../schemas/inv")
const items = require("../../economy/shop")

module.exports = {
    name: 'sell',
    category: "economy",
    description: 'sell an item in your inventory',
    usage: '?sell <item name> <amount>',
    aliases: [],
    timeout: 0,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    let inv;
    try {
      inv = await inventory.findOne({
        User: message.author.id
      })
      if(!inv) return message.channel.send(`Your inventory is empty!`)
    } catch (e) {
      console.error(e)
    }
if(!args[0]) return message.reply("Pls provide a item")
    if(!Object.keys(inv.Inventory).includes(args[0])) return message.channel.send(`You dont own this item!`)

    let toSell = args[0].toLowerCase()

    if(items.find((val) => (val.items.toLowerCase()) === toSell).price.sell === 0 && message.author.id !== '768362780545384449') return message.channel.send(`This item is not sellable`)

    let amountToSell;
    if(!args[1]) {
      amountToSell = 1
    } else {
      if(isNaN(args[1]) && (args[1] == 'all' || args[1] == 'max')) {
        amountToSell = inv.Inventory[toSell]
      } else {
        if(!isNaN(args[1])) {
          amountToSell = Number(args[1])
        }
      }
    }

    let params = {
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

    if(inv.Inventory[toSell] < amountToSell && inv.Inventory[toSell] !== 0) {
      amountToSell = inv.Inventory[toSell]
    }

    const itemPrice = items.find((val) => (val.items.toLowerCase()) === toSell).price.sell * amountToSell

    inventory.findOne(params, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory[toSell] - amountToSell) >= 1) {
          data.Inventory[toSell] = data.Inventory[toSell] - amountToSell;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne(params)
          } else {
            delete data.Inventory[toSell]
          }
        }
        await inventory.findOneAndUpdate(params, data)
      }
      message.reply(`You sold **${amountToSell} ${toSell}** for **⏣${number(itemPrice)}**!`)
      try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: itemPrice,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    })

}
      }