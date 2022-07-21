const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');
let inventory = require('../../schemas/inv')
let shop = require("../../economy/shop")
let toTitleCase = require('../../function/toTitleCase')

module.exports = {
    name: 'pm',
    category: "economy",
    description: 'post a meme!',
    usage: '?pm',
    aliases: ['postmeme'],
    timeout: 60,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    let inv;
    try {
      inv = await inventory.findOne({
        User: message.author.id,
      })
    } catch (e) {
      console.error(e)
    }

    if(!inv || !inv.Inventory.laptop) return message.channel.send(`You need a laptop to use this command!`)

    const findShopItem = (search) => shop.find( ({ items }) => items === search );

    let item = findShopItem("laptop")

    let emoji = Discord.Util.parseEmoji(item.emoji);

    emojiImg = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`;

    let embed = new MessageEmbed()
    .setTitle(`Post a meme!`)
    .setDescription(`**Pick a meme to post!**\n${emo.arrow}Click the button to choose.`)
    .setFooter(`${message.author.username}`)
    .setColor(Color)
    .setTimestamp()
    .setThumbnail(emojiImg)

    let createButton = (label) => {
      let id = label.toUpperCase()
      return new MessageButton()
      .setCustomId(id)
      .setLabel(label)
      .setStyle('SUCCESS')
    }

    let New = createButton("New")
    let Repost = createButton(`Repost`)
    let Copypasta = createButton('Copypasta')
    let Relatable = createButton('Relatable')
    let Intellectual = createButton('Intellectual')

    let row = new MessageActionRow()
    .addComponents(
      New, Repost, Copypasta, Relatable, Intellectual
    )

    let sentMsg = await message.channel.send({ embeds: [embed], components: [row]})

    let collector = sentMsg.createMessageComponentCollector({
      time: 60000
    })

    let disabledRow = new MessageActionRow()
    .addComponents(
      New.setStyle("SECONDARY").setDisabled(true),
      Repost.setStyle("SECONDARY").setDisabled(true), Copypasta.setStyle("SECONDARY").setDisabled(true), Relatable.setStyle("SECONDARY").setDisabled(true), Intellectual.setStyle("SECONDARY").setDisabled(true)
    )

    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return i.reply({
        content: 'this is not for you!',
        ephemeral: true
      })
      let result = async(label) => {
        let amount = Math.floor(Math.random() * (1 + 1500 - 800) + 1000)
        amount = amount == 1000 ? 20000 : amount
        let chances = Math.floor(Math.random() * 50)
        if(chances !== 1) {
          let resultArray = [
            `You posted a poggo meme!!!`,
            `Your meme was decent`,
            `You posted a decent meme!`,
            `Your meme wasnt bad!`,
            `everyone loves your meme!`,
            `your meme was very funny`
          ]
          let resultEmbed = new MessageEmbed()
          .setAuthor(`${message.author.username} posted a new meme!`)
          .setDescription(`${resultArray[Math.floor(Math.random() * resultArray.length)]}\nYou got **⏣ ${number(amount)}**`)
          .setFooter(label)
          .setColor("GREEN")
          .setTimestamp()
          i.update({embeds: [resultEmbed], components: [disabledRow]})
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
        } else {
          let resultEmbed = new MessageEmbed()
          .setTitle(`You posted a trash meme`)
          .setDescription(`Your followers broke ur laptop! Buy a new one`)
          .setFooter(label)
          .setTimestamp()
          .setColor("RED")
          i.update({embeds: [resultEmbed], components: [disabledRow]})
          let params = {
            User: message.author.id
          }
      await inventory.findOne(params, async(err, data) => {
      if(data && !isEmpty(data.Inventory)) {
        if((data.Inventory["laptop"] - 1) >= 1) {
          data.Inventory["laptop"] = data.Inventory["laptop"] - 1;
        } else {
          if(Object.keys(data.Inventory).length === 1) {
          await inventory.deleteOne(params)
          } else {
            delete data.Inventory["laptop"]
          }
        }
        await inventory.findOneAndUpdate(params, data)
      }
      })
        }
      }
      result(`${i.customId.toTitleCase()}`)
    })

}
    }