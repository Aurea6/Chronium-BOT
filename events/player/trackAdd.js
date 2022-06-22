const { MessageEmbed } = require("discord.js");

module.exports = async(queue, track) => {
    if (!queue.playing || queue.tracks.length <= 0) return;

    const embed = new MessageEmbed()
      .setTitle(`Track queued - Position ${queue.tracks.indexOf(track) +1}`)
      .setDescription(`[${track.title}](${track.url}) ~ [${track.requestedBy.toString()}]`)
      .setColor(queue.guild.me.displayColor || "#00FFFF");

    queue.metadata.editReply({ embeds: [embed], allowedMentions: { repliedUser: false } }).then(async(msg)=>{
      setTimeout(function(){
        msg.delete();
      }, 10000);
    })

};
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */