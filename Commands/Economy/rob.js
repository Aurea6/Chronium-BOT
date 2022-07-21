const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
const inventorySchema = require("../../schemas/inv")

module.exports = {
    name: 'rob',
    category: "economy",
    description: 'rob people',
    usage: '?rob <member>',
    aliases: ['steal'],
    timeout: 60,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

      

    let member = message.mentions.members.first()

    if(!member) return message.channel.send(`You didnt mention a member to rob!`)

    if(member.id == message.member.id) return message.channel.send(`You cant rob yourself!`)
    if(member.user.bot) return message.channel.send(`You cant rob bots!`)
     
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

    let victim;
    try {
      victim = await eco.findOne({
        userID: member.id,
      })
      if(!victim) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
        victim = await eco.create({
          userID: member.id,
          coins: 500,
          bank: 0,
          maxBank: 500
        })
        victim.save()
      }
    } catch (e) {
      console.error(e)
    }

    let victimInv;
    try {
      victimInv = await inventorySchema.findOne({
        User: member.id
      })
    } catch (e) {
      console.error(e)
    }

    if(victimInv && victimInv.Inventory["padlock"]) {
      let amount;
      if(profile.coins < 10000) {
        amount = Math.floor(Math.random() * (1 + 7500 - 4999) + 4999)
      } else {
        amount = 7000
      }
      message.channel.send(`**Imagine trying to rob a person with padlock**`)

      function isEmpty(obj) {
        for(var prop in obj) {
         if(Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false;
          }
       }

        return JSON.stringify(obj) === JSON.stringify({});
      }
      let params = {
        User: member.id
      }
      inventorySchema.findOne(params, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["padlock"] - 1) >= 1) {
          data.Inventory["padlock"] = data.Inventory["padlock"] - 1;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventorySchema.deleteOne(params)
          } else {
            delete data.Inventory["padlock"]
          }
        }
        await inventorySchema.findOneAndUpdate(params, data)
      }
      })
    } else {

    if(profile.coins < 5000) return message.channel.send(`You need atleast **⏣5,000** to rob someone`)

    if(victim.coins < 5000) return message.channel.send(`You cant rob broke people`)

    let chances = Math.floor(Math.random() * 2)

    if(chances !== 1) {
      let amount;
      if(profile.coins > 10000) {
        amount = Math.floor(Math.random() * (1 + 5500 - 5000) + 5000)
      } else {
        amount = 5000
      }
      message.channel.send(`You were caught! You paid **⏣${amount}**`)
      await eco.findOneAndUpdate({
        userID: message.author.id,
      }, {
        $inc: {
          coins: -amount
        }
      })
      await eco.findOneAndUpdate({
        userID: member.id
      }, {
        $inc: {
          coins: amount
        }
      })
    } else {
      let rate = Math.floor(Math.random() * 10)
      let amount;
      if(rate == 3) {
        amount = Math.floor(Math.random() * (1+  Math.floor(victim.coins/1.3) -  Math.floor(victim.coins/4)) +  Math.floor(victim.coins/4))
      } else {
        if(rate == 4) {
        amount = Math.floor(Math.random() * (1+ (victim.coins/12) - (victim.coins/15)) + (victim.coins/15))
        } else {
          amount = Math.floor(Math.random() * (1+ (victim.coins/65) - (victim.coins/40)) + (victim.coins/40))
        }
      }

      function between(min, max, subject) {
        if(subject > min && subject < max) {
          return true
        } else {
          return false
        }
      }

      let desc;

      if(between(Math.floor(victim.coins/4), Math.floor(victim.coins/1.3), amount)) {
        desc = `You stole a BIG portion from ${member.user.username} and got **⏣${number(amount)}**`
      } else if(between(Math.floor(victim.coins/15), Math.floor(victim.coins/12), amount)) {
        desc = `You stole a good amount from ${member.user.username} and got **⏣${number(amount)}**`
      } else {
        desc = `You stole a TINY amount from ${member.user.username} and got **⏣${number(amount)}**`
      }
      await eco.findOneAndUpdate({
        userID: message.author.id,
      }, {
        $inc: {
          coins: amount
        }
      })
      await eco.findOneAndUpdate({
        userID: member.id
      }, {
        $inc: {
          coins: -amount
        }
      })
      message.channel.send({content: desc})
    }
    }


}
       }