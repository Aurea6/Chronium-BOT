const {MessageEmbed, MessageActionRow ,MessageButton} = require("discord.js") 
const multi = require("../../schemas/multi") 


module.exports = {
  name: "multi",
  run: async(client, message,args) => {

const member = message.mentions.members.first() || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

const usericon = member.user.avatarURL;
let profile; 
    try {
      profile = await multi.findOne({
        User: member.id,
      })
      if(!profile) {
        
        if(member.user.bot) return message.channel.send(`Bots have more cash than you ;-;`)
        profile = await multi.create({
          User: member.id,
          Multi: 0,
          
        })
        profile.save()
      }
    }catch (e) {console.error(e)}


    const embed = new MessageEmbed()
    .setTitle(`${member.user.username}'s Multi`)
     
      .setDescription(`Multi: ${profile.Multi}% <a:FidgetSpinner:911538800302391347>`)
    .setFooter(`Use ur spinner for more multi uwu`)
        message.channel.send({embeds: [embed]})
  }    
}