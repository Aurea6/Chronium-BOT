const channelData = require('../../database/guildData/channelupdates')
const { MessageEmbed } = require('discord.js')

module.exports = async(channel) => {
    const data = await channelData.findOne({
        GuildID: channel.guild.id,
    })

    if (!data) return;

    const embed = new MessageEmbed()
    .setTitle("Channel Created")
    .setDescription(`Channel Name: ${channel.name}\nChannel ID: ${channel.id}\nChannel Type: ${channel.type}`)
    .setColor("GREEN")
    .setTimestamp()

    channel.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed] })
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