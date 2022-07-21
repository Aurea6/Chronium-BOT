const Discord = require('discord.js')

let { MessageEmbed } = require("discord.js")

const Color = `#ffcc00`

let emo = {
  loading: "<a:3042loading:870618209148088360>",
  line: "<:botDecoHeheheheh:877785886081814538>",
  arrow: "<a:Yellow_Arrow_Right:883705649106649088>",
  check: "<a:verify:880366852826599480>"
}

module.exports = {
    name: 'ban',
    category: "mod",
    description: 'ban member lel',
    usage: '?ban <member>',
    aliases: [],
    run : async (client, message, args) => {
     
  try{

  if(!args[0]) return message.channel.send(`:x: | Please specify member to ban`)

 let reason = args.slice(1).join(" ")
 if(!reason) reason = "Not specified!"

 if (message.member.permissions.has("BAN_MEMBERS")) {

 let member = message.mentions.members.first() || client.members.cache.get(args[0]) || client.members.cache.find(r => r.user.tag === args[0])

 if(!args[0]) return message.channel.send(":x: | Please mention a member")

 if(!member) return message.channel.send(":x: | Can't find the user!");

 if(member.id == message.author.id) return message.channel.send(":x: | you can't ban yourself lmao")

 if(member.id == client.user.id) return message.channel.send("no");

 if(member.id == message.guild.ownerId) return message.channel.send(":x: | You can't ban the owner!");

 if (member.roles.highest.position >= message.member.roles.highest.position && message.author !== message.guild.owner) {
    return message.channel.send(":x: | You can\'t ban this member due to your role being lower than that member role.")
 }

 if(!member.bannable) return message.channel.send(`:x: | Member is not Bannable!`);

 else {
   const embed = new Discord.MessageEmbed()
   .setTitle("Member Banned!")
   .setDescription(`${member.user.username} was banned by ${message.author.username}`)
   .addField(`Banned member:`, member.user.tag, true)
   .addField(`Moderator:`, message.author.tag, true)
   .addField(`reason:`, reason)
   .setTimestamp()
   .setColor("#00b9bc")
   .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
 member.ban({ reason: reason }).then(mem => {
 message.channel.send({embeds: [embed]})
 mem.send(`You got banned haha nub xD\nReason: ${reason}`)
 }).catch(e => {
   message.channel.send(`:x: | Bot missing permission`)
 })
 }
 } else {
   const noperms = new Discord.MessageEmbed()
   .setFooter(`You dont have permission to do that!`, message.author.displayAvatarURL({dynamic:true}))
   .setColor("YELLOW")
 message.channel.send(`:x: | You dont have permission`)
 }
  } catch (e) {
    message.channel.send(`:x: | Error: ${e}`)
    console.log(e)
  }



}
 }