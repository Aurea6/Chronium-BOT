const memberData = require("../../database/guildData/memberupdates")
const { MessageEmbed } = require("discord.js")

module.exports = async (member) => {
    const data = await memberData.findOne({
        GuildID: member.guild.id,
    })

    if (!data) return;

    const embed = new MessageEmbed()
    .setTitle('Member Joined')
    .setDescription(`User: ${member.user.tag} (${member})\nUser ID: ${member.id}\nAcc. Created: ${member.user.createdAt}\nServer Member Count: ${member.guild.memberCount}`)
    .setColor("GREEN")
    .setTimestamp()
    .setThumbnail(`${member.user.avatarURL}`)

    member.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed]})
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