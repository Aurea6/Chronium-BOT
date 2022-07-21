const moment = require("moment")
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js") 
let { pagination } = require('../../function/pagination')
const client = require("../../index") 
module.exports = {
    name: 'snipe',
    category: "utility",
    description: 'snipe yo mum',
    usage: 'snipe',
    aliases: [],
    timeout: 2,
    run: async (client, message, args) => {
        const snipes = client.snipes.get(message.channel.id)
        if(!snipes) return message.channel.send(`:x: | There's nothing to snipe!`)
    
        let embeds = [];
    
        snipes.forEach(snipe => {
          const {msg, time, image} = snipe;
          embeds.push(
            new MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic:true}))
            .setImage(image)
            .setDescription(msg.content)
            .setFooter(`${moment(time).fromNow()}`)
            .setColor("YELLOW")
          )
        })
    
        pagination({
          author: message.author,
          channel: message.channel,
          embeds: embeds,
          fastSkip: true,
          time: 60000,
        })
    }
}