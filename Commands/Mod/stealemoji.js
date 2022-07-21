const { Util } = require("discord.js")

  module.exports = {
    name: "addemoji",
    category: "moderation",
    description: "Steal emojis from other server",
    userpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
  botpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
    usage: "addemoji <emoji> <name>",
    aliases: ["stealemoji"],
    run: async(client, message, args) => {
        const emoji = args[0];
       if (!emoji) return message.channel.send("Please provide emoji to add\n\n**Usage:** `addemoji <emoji> <name>`");

      let custom = Util.parseEmoji(emoji);

		const name = args[1] ? args[1].replace(/[^a-z0-9]/gi, "") : null;
		if (!name) {
			return message.lineReply("Please provide a name to set");
		}
		if (name.length < 2 || name > 32) {
			return message.lineReply("Emoji name length should be between 2 and 32");
		}     
   const URL = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;
   
     message.guild.emojis
			.create(URL, name)
			.then(emoji => {
				message.lineReply(`Emoji ${emoji} was successfully added`, {
					emojiName: emoji.name
				}).catch((err) =>{
				    const em = new MessageEmbed()
				    message.lineReply("Error exist, please join our community server and report this.")
				    console.log(err)
				});
			})
     }
  }