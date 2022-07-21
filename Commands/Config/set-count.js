const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")
const countingSchema = require("../../schemas/counting") 
module.exports = {
    name: 'set-countingchannel',
    category: "category",
    description: 'description',
    usage: 'usage',
    aliases: ["setcounting"],
    timeout: 0,
    boostersOnly: false,
    run : async (client, message, args) => {

    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`You dont have perms`)
     
    let channel = message.mentions.channels.first() || message.channel;

    let counting = await countingSchema.findOneAndUpdate(
    {
      guild: message.guild.id
    }, {
      channel: channel.id
    }
    )

    if(counting) {
       message.channel.send(`Updated counting channel to ${channel}`)
    } else {

      await countingSchema.create({
        lastUser: client.user.id,
        lastNumber: 0,
        channel: channel.id,
        guild: message.guild.id
      })

      message.channel.send(`Counting channel set to ${channel}`)
    }

}
}