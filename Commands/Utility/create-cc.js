const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const schema = require('../../schemas/customcmd')

const Color = `#ffcc00`

let emo = require("../../emojis")

let { prefix } = require("../../botconfig/main")

module.exports = {
    name: 'create-cc',
    category: "boosters",
    description: 'Create a custom command! command will be saved in the database',
    usage: 'createcc <command name> <command response>',
    aliases: ['cc-create','addtag'],
    timeout: 0,
  userpermissions: ["MANAGE_GUILD"],
    
    run : async (client, message, args) => {

    if(!args[0]) return message.channel.send(`:x: | specify the command \`create <cmd> <response>\``)
     
    let data;
    try {
      data = await schema.findOne({
        commandName: args[0],
        guildID: message.guild.id
      })
      if(data) return message.channel.send({content: 'that command already exist! Try again'})
      if(!data) {
        if(!args[1]) return message.channel.send(`:x: | specify the response \`create <cmd> <response>\``)
        data = await schema.create({
          commandName: args[0],
          commandResponse: args.slice(1).join(" "),
          authorId: message.author.id,
          guildID: message.guild.id
        }).then(() => message.channel.send(`Command created! You can use the command by typing **${prefix}${args[0]}**`))
      }
    } catch (e) {
      console.error(e)
      message.channel.send(`Something went wrong! Try again.`)
    }

}
      }