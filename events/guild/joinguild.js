const config = require("../../botconfig/main") 

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 
const client = require("../../index") 
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://dsc.gg/idk-development')
 .setDescription(`Hey! there thanks for inviting me! Here take a freshly baked cookie 🍪. My default prefix is \`${config.prefix}\`.
Run ${config.prefix}help for more info about me!`)
 
 .addFields(
 { name: 'Creator', value: 'iRed#1330' }
 )

 .setImage('https://share.creavite.co/SMPxjehImxdRAymZ.gif')
 .setTimestamp()
 .setFooter('Chronium Bot v1.0.3 - STABLE', 'https://dsc.gg/chronium-bot');
channel.send({embeds : [embed]});
}) 
