const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'clyde',
  description: 'Get a custom clyde message!',
  botPerms: ["ATTACH_FILES"],
  run: async(client, message, args) => {
    if (!args[0]) {
    return message.channel.send(`Usage: ${client.prefix}clyde <msg>`)
    }
    let clydeMessage = args.join(' ');

    message.channel.send({ files : [{ attachment: `https://ctk-api.herokuapp.com/clyde/${clydeMessage}`, name: 'file.jpg' }]});
  }
} 
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */