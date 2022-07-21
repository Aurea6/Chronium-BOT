const client = require('../../index');
const { MessageEmbed, MessageAttachment } = require("discord.js");
const wlcSchema = require("../../schemas/leave");
const pop = require("popcat-wrapper");
const  ultrax = require('ultrax')
client.on('guildMemberRemove', async(member) => {

  

//ignore the upper part ^^

  
  
//WELCOMING SYSTEM

const wData = await wlcSchema.findOne({Guild: member.guild.id});

if(!wData) return;
  
  let  bg = 'https://media.discordapp.net/attachments/908270986665803816/921051784536023110/F32351CF-CB53-41CE-90AA-E7985B656D05.png'
// defining the member's avatar with "PNG" as format.
let  avatar = member.user.displayAvatarURL({ format:  "png" })
// defining text_1 (title)
let  text1 = "Goodbye"
// defining text_2 (subtitle)
let  text2 = member.user.tag
// defining text_3 (footer)
let  text3 = `Now we have ${member.guild.memberCount} member`
// defining the color, here its white
let  color = '#ffffff'
// defining the options and setting them (Those are optional)

// creating the image
const image = await  ultrax.welcomeImage(bg, avatar, text1, text2, text3, color)




client.channels.cache.get(wData.Channel).send({
 files: [image]
})
  
})