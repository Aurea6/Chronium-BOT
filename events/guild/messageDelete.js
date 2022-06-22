const messageData = require('../../database/guildData/messagelogs')
const { MessageEmbed } = require('discord.js')

module.exports = async(message) => {
    const data = await messageData.findOne({
        GuildID: message.guild.id,
    })

    if (!data) return;

    const channel = data.ChannelID

    const embed = new MessageEmbed()
    .setTitle("Message Deleted")
    .setDescription(`${message.author.username}'s messages was deleted in ${message.channel}`)
    .addField('Message Content', `${message.content}`)
    .setColor("GREEN")
    .setTimestamp()

    message.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed] })
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