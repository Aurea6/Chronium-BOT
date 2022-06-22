const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Get Chronium's Invite Link [Here](https://discord.com/oauth2/authorize?client_id=977141223301189674&permissions=1375732092151&scope=bot%20applications.commands)**\n**Need assistance? Join our [Support Server](https://dsc.gg/idk-development) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
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