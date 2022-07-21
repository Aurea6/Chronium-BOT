const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'screenshot',
    aliases: ['ss'],
    category: "image",
    description: 'Screenshot a website',
    usage: 'screenshot <https://github.com>',
    run : async (client, message, args) => {
      let content = args[0]
      if(!content) {
        return message.channel.send(`Please provide a website
        Example: \`screenshot https://github.com\``)
      }
      if(content.toLowerCase().startsWith(`https://`)||content.toLowerCase().startsWith(`http://`)) {
    let imgae = `https://api.popcatdev.repl.co/screenshot?url=${args[0]}`
let image = new Discord.MessageAttachment(imgae, "ss.png")
let embed = new MessageEmbed().setImage('attachment://ss.png')
.setTitle(`Screenshot from ${content}`)
.setFooter(`Requested by ${message.author.tag}`)
message.channel.send({ embeds: [embed], files: [image] })
      }else {
        message.channel.send(`That is not a link!`)
      }
    }
}