

const { MessageEmbed, MessageAttachment } = require("discord.js");
const { default: fetch } = require("node-fetch");

module.exports = {
  name: "pixelize",
  description: "Pixelize an image or a user's avatar",
  aliases: ["pixel"],
  category: "image",
  usage: "<URL | @USER | ATTACHMENT>",
  
  botpermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  run: async (client, message, args, Discord) => {
    const api = "milkshake";
    const user =
      message.mentions.users.first() ||
      message.guild.members.cache
        .filter((u) => u.user.username === args[0])
        .get(args[0]) ||
      message.guild.members.cache
        .filter((u) => u.user.tag === args[0])
        .get(args[0]) ||
      message.guild.members.cache
        .filter((u) => u.user.id === args[0])
        .get(args[0]) ||
      message.author;

    const userImage = user.displayAvatarURL({ format: 'png', dynamic: false })

    const response = await fetch(`https://api.notzerotwo.ml/image/pixelize?api=${api}&image=${args.join(" ") || message.attachments.first()?.proxyURL || userImage}`)
    const data = await response.buffer()

    const attachment = new MessageAttachment(data, 'pixel.png')
    message.channel.send({ files: [attachment] })
  },
}
