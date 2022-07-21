
module.exports = {
    name: 'server',
    aliases: ['serverinfo', 'si'],
    description: 'server info...',
    cooldown: 5000,
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js');
        const moment = require('moment');
        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: '💢',
            VERY_HIGH: '💥'
        };
        const regions = {
            brazil: '🇧🇷',
            europe: '🇪🇺',
            hongkong: '🇭🇰',
            india: '🇮🇳',
            japan: '🇯🇵',
            russia: '🇷🇺',
            singapore: '🇸🇬',
            southafrica: '🇿🇦',
            sydney: '🇦🇺',
            '🇺🇸': 'US East',
            '🇺🇸': 'US West',
            '🇺🇸': 'US South'
        };
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        let txt = '#️⃣'
        let ch = '<:voicechannel:869281232201080933> '
        let mem = '<:members:863637932270551040> '
        let online = "<:online:869190337216774144>"
        let idle = "<:idle:869190610635087873>"
        let dnd = "<:dnd:869190610962247711>"
        let offline = "<:ooffline:869190610710581289>"
        const embed = new MessageEmbed()
            .setColor('5539cc')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
                { name: 'Name', value: `${message.guild.name}`, inline: true },
                { name: 'Owner', value: `${message.guild.owner.user.tag}` },
                { name: 'Region', value: `${regions[message.guild.region]}`, inline: true },
                { name: `Boosts`, value: `${message.guild.premiumTier ? `Tier : ${message.guild.premiumTier}` : 'None'}`, inline: true },
                { name: `Verification Level `, value: `__${verificationLevels[message.guild.verificationLevel]}__`, inline: true },
                { name: 'Time Created', value: `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]` },
            )
            .addField(`${mem} Member Status`, `${online}  ${members.filter(member => member.presence.status === 'online').size}  ${dnd}: ${members.filter(member => member.presence.status === 'dnd').size}  ${idle}: ${members.filter(member => member.presence.status === 'idle').size}   ${offline}: ${members.filter(member => member.presence.status === 'offline').size}`)
            .addFields(
                { name: 'Bots ', value: `${members.filter(member => member.user.bot).size}`, inline: true },
                { name: 'Boost Count: ', value: `${message.guild.premiumSubscriptionCount || '0'}`, inline: true },
            )
            .addFields(
                { name: 'Roles', value: `${roles.length}`, inline: true },
                { name: 'Emoji Count', value: `${emojis.size}`, inline: true },
            )
            .addField('Channels', `${txt} Channels : ${channels.filter(channel => channel.type === 'text').size} 
             ${ch} Channels : ${channels.filter(channel => channel.type === 'voice').size}`,
             )
            .setTimestamp();
        message.channel.send({embeds: [embed]});
    }

}