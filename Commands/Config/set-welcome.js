const Schema = require('../../schemas/welcome');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'set-welcome-channel',
  aliases: ['setwelcomechannel'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
   run: async(client, message, args) => {
     if(!message.member.permissions.has('ADMINISTRATOR')) return;
     
     const channel = message.mentions.channels.first();
     if(!channel) return message.reply('Plese mention a channel!');
     
     Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
       if(data) {
         data.Channel = channel.id;
         data.save();
       } else {
         new Schema({
           Guild: message.guild.id,
           Channel: channel.id,
         }).save();
       }
       message.reply(`${channel} has been set to as the welcome channel`);
     });
   },
};  
