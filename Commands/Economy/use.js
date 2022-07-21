const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const multi = require("../../schemas/multi") 
const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
let inv = require('../../schemas/inv')
let inventory = require('../../schemas/inv')
let percent = require("../../function/percentage")

module.exports = {
    name: 'use',
    category: "category",
    description: 'description',
    usage: 'usage',
    aliases: [],
    timeout: 0,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {
     
    if(args.join(' ').toLocaleLowerCase() == 'banknote') {
    let inventory;
    try {
      inventory = await inv.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }
    if(!inventory || !inventory.Inventory.banknote) return message.channel.send(`you dont own this item!`);

    let amountToUse;
    if(args[1]) {
      if(isNaN(amountToUse)) {
        if(args[0].toLowerCase() != 'all' && args[0].toLowerCase() != 'max') return message.channel.send(`:x: | Amount of banknote must be a number or \`all\``)
        else amountToUse = inventory.Inventory.banknote
      }
    } else {
      amountToUse = 1
    }

    let profile;
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
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

    let newMaxBank = Math.floor(profile.maxBank * 0.97)

    try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            maxBank: newMaxBank,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    message.reply(`you used ur banknote and get **⏣${number(newMaxBank)}** (\`${percent(newMaxBank, profile.maxBank)}%\`) more bank space!`)

    function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
      }
    }

      return JSON.stringify(obj) === JSON.stringify({});
    }
    
    let params = {
      User: message.author.id
    }

    inv.findOne({User: message.author.id}, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["banknote"] - amountToUse) >= 1) {
          data.Inventory["banknote"] = data.Inventory["banknote"] - amountToUse;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne({User: message.author.id})
          } else {
            delete data.Inventory["banknote"]
          }
        }
        await inv.findOneAndUpdate(params, data)
      }
    })
    } else if(args.join(' ').toLocaleLowerCase() == 'santasbag') {
      let inventory;
    try {
      inventory = await inv.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }
    if(!inventory || !inventory.Inventory.santasbag) return message.channel.send(`you dont own this item!`);
      let amountToUse;
    if(args[1]) {
      if(isNaN(amountToUse)) {
        if(args[0].toLowerCase() != 'all' && args[0].toLowerCase() != 'max') return message.channel.send(`:x: | Amount of santasbag must be a number or \`all\``)
        else amountToUse = inventory.Inventory.santasbag
      }
    } else {
      amountToUse = 1
    }

    let profile;
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
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

    let amount = Math.floor(Math.random() * (1+1500-400) + 400)

    try {
    await eco.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    message.reply(`WOHOO! 🎅 Gave u ${amount} `)

    function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
      }
    }

      return JSON.stringify(obj) === JSON.stringify({});
    }
    
    let params = {
      User: message.author.id
    }

    inv.findOne({User: message.author.id}, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["santasbag"] - amountToUse) >= 1) {
          data.Inventory["santasbag"] = data.Inventory["santasbag"] - amountToUse;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne({User: message.author.id})
          } else {
            delete data.Inventory["santasbag"]
          }
        }
        await inv.findOneAndUpdate(params, data)
      }
    })
    } else if(args.join(' ').toLocaleLowerCase() == 'spinner') {
      let inventory;
    try {
      inventory = await inv.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }
    if(!inventory || !inventory.Inventory.spinner) return message.channel.send(`you dont own this item!`);
      let amountToUse;
    if(args[1]) {
      if(isNaN(amountToUse)) {
        if(args[0].toLowerCase() != 'all' && args[0].toLowerCase() != 'max') return message.channel.send(`:x: | Amount of spinner must be a number or \`all\``)
        else amountToUse = inventory.Inventory.spinner
      }
    } else {
      amountToUse = 1
    }

    let profile;
    try {
      profile = await multi.findOne({
        User: message.author.id,
      })
      if(!profile) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
        profile = await multi.create({
          User: message.author.id,
          Multi: 0,
          
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }

    let amount = Math.floor(Math.random() * (1+15-4) + 4)

    try {
    await multi.findOneAndUpdate(
        {
          User: message.author.id,
        },
        {
          $inc: {
            Multi: amount,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    message.reply(`Ur spinner span for ${amount} and got u ${amount}% multi`)

    function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
      }
    }

      return JSON.stringify(obj) === JSON.stringify({});
    }
    
    let params = {
      User: message.author.id
    }

    inv.findOne({User: message.author.id}, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["spinner"] - amountToUse) >= 1) {
          data.Inventory["spinner"] = data.Inventory["spinner"] - amountToUse;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne({User: message.author.id})
          } else {
            delete data.Inventory["spinner"]
          }
        }
        await inv.findOneAndUpdate(params, data)
      }
    })
    } else if(args.join(' ').toLocaleLowerCase() == 'xmaspresent') {
      let inventory;
    try {
      inventory = await inv.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }
    if(!inventory || !inventory.Inventory.xmaspresent) return message.channel.send(`you dont own this item!`);
      let amountToUse;
    if(args[1]) {
      if(isNaN(amountToUse)) {
        if(args[0].toLowerCase() != 'all' && args[0].toLowerCase() != 'max') return message.channel.send(`:x: | Amount of spinner must be a number or \`all\``)
        else amountToUse = inventory.Inventory.xmaspresent
      }
    } else {
      amountToUse = 1
    }

    
    function isEmpty(obj) {
  for(var prop in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
      }
    }

      return JSON.stringify(obj) === JSON.stringify({});
    }
    
    let params = {
      User: message.author.id
    }

    inv.findOne({User: message.author.id}, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["xmaspresent"] - amountToUse) >= 1) {
          data.Inventory["xmaspresent"] = data.Inventory["xmaspresent"] - amountToUse;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne({User: message.author.id})
          } else {
            delete data.Inventory["xmaspresent"]
          }
        }
        await inv.findOneAndUpdate(params, data)
      }
    })
          
    } else {
      message.channel.send(`This item is not useable`)
    } 
}
          }