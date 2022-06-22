const { MessageEmbed } = require('discord.js')
const channelData = require('../../database/guildData/channelupdates')

module.exports = async(oldThreadMembers, newThreadMembers) => {
    const data = await channelData.findOne({
        GuildID: newThread.guild.id,
    })
    if (!data) return;

    if (oldThreadMembers.size < newThreadMembers.size) {
        const memberJoinEmbed = new MessageEmbed()
        .setTitle(`${oldThreadMembers.thread.name}`)
        .addField("Thread Member Count Updated",`${oldThreadMembers.size} => ${newThreadMembers.size}`)
        .setColor("GREEN")
        .setTimestamp()

        newThread.guild.channels.cache.get(data.ChannelID).send({embeds: [memberJoinEmbed]})

    } else if (oldThreadMembers.size > newThreadMembers.size) {
        let memberLeftEmbed = new MessageEmbed()
        .setTitle(`${oldThreadMembers.thread.name}`)
        .addField("Thread Member Count Updated",`${oldThreadMembers.size} => ${newThreadMembers.size}`)
        .setColor("GREEN")
        .setTimestamp()

        newThread.guild.channels.cache.get(data.ChannelID).send({embeds: [memberLeftEmbed]})
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