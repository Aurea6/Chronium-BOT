const {
  MessageEmbed, 
  MessageActionRow, 
  MessageButton, 
  MessageSelectMenu,
  Collection
} = require("discord.js")

const client  = require("../../index")
let emo = require("../../emojis")

const { prefix } = require("../../botconfig/main")

client.on('messageUpdate', async (oldmMsg, newMsg) => {
  const args = newMsg.content.slice(prefix.length).split(' ')
  const command = client.commands.get(args[0])
  let args2 = args.slice(1)
  if(command) command.run(client, newMsg, args2)
})