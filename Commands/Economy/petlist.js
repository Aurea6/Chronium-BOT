const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
let petList = require('../../economy/pet')
const eco = require('../../schemas/economy');
const pet = require("../../schemas/pet") 
module.exports = {
    name: 'pet',
    category: "economy",
    description: 'see all the available pets!',
    
    aliases: ['pets'],
    timeout: 0,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {
     
let pets;
    try {
      pets = await pet.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }

if(!pets) {
    let mapped = petList.map(pet => {
      return `** ${pet.emoji} ${pet.name.replace("_", " ").toTitleCase()}**\n*ID:* \`${pet.id}\``
    }).join("\n\n")


    let embed = new MessageEmbed()
    .setDescription(`\`\`\`\Aww u don't have a cute pet! Adopt one with adopt cmd\`\`\`\n\n${mapped}`)
    .setColor(Color)
    .setTitle(`Pet List`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send({embeds: [embed]})
} else if (pet) { message.reply(`Aww! U have a ${pets.Pet}`)}
}
}