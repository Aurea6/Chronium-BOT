const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Unmutes the specified user.',
    usage: '',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        target.roles.remove(role.id);
        message.reply('Unmuted!')


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