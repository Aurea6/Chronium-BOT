const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const schema = require('../../schemas/customcmd')

const Color = `#ffcc00`

let emo = require("../../emojis")

module.exports = {
    name: 'delete-cc',
    category: "owner",
    description: 'deletes custom commands',
    usage: '?deletecc <command name>',
    aliases: ['deletetag', "delet-customcmd"],
    timeout: 0,
    boostersOnly: false,
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

    if(message.author.id !== findCommand.authorId && message.author.id !== '742335160598659094' && !message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`:x: | Cannot delete the command because its not made by you!`)
     
    let data;
    try {
      data = await schema.deleteOne({
        commandName: args[0],
        guildID: message.guild.id
      })
      if(data) return message.channel.send({content: 'Successfully deleted the command!'})
      if(!data) {
        return message.channel.send(":x: | can't find command! try again")
      }
    } catch (e) {
      console.error(e)
      message.channel.send(`Something went wrong! Try again.`)
    }

}
        }