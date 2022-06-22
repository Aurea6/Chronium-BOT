const messageData = require("../../database/guildData/messagelogs")
const { MessageEmbed } = require("discord.js")

module.exports = async(oldMessage, newMessage) => {
    const data = await messageData.findOne({
        GuildID: newMessage.guild.id
    })

    if (!data) return;

    const channel = data.ChannelID

    const embed = new MessageEmbed()
    .setTitle("Message Edited")
    .setDescription(`${newMessage.author} edited their message in ${newMessage.channel}`)
    .addField('Jump to Message', `[Click Me](https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`)
    .addField(`Old Message`, `${oldMessage.content}`, true)
    .addField('New Message', `${newMessage.content}`, true)
    .setColor('GREEN')
    .setTimestamp()

    newMessage.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed] })
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