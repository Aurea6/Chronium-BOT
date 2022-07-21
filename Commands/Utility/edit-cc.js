const schema = require('../../schemas/customcmd')

const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');

module.exports = {
    name: 'edit-cc',
    category: "category",
    description: 'description',
    usage: 'usage',
    aliases: ['edittag','edit-customcmd'],
    timeout: 0,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    if(!args[0]) return message.channel.send(`:x: | specify the command \`deletecc <cmd>\``)

    let findCommand;
    try{
      findCommand = await schema.findOne({
        commandName: args[0],
        guildID: message.guild.id
      })
    } catch (e) {
      console.error(e)
    }

    if(!findCommand) return message.channel.send(":x: | can't find command! try again")

    if(message.author.id !== findCommand.authorId && message.author.id !== '742335160598659094' && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`:x: | Cannot edit the command because its not made by you!`)

    let newResponse = args.slice(1).join(" ")
     if(!newResponse) return message.reply("Pls provide a new response")
    let data;
    try {
      data = await schema.findOneAndUpdate(
      {
        commandName: args[0],
        guildID: message.guild.id
      },
      {
        commandResponse: newResponse,
      }
      )
      if(data) return message.channel.send({content: 'Successfully edited the command!'})
      if(!data) {
        return message.channel.send(":x: | can't find command! try again")
      }
    } catch (e) {
      console.error(e)
      message.channel.send(`Something went wrong! Try again.`)
    }
    }
      }