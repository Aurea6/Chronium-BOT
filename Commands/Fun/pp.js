const Discord = module.require("discord.js");

module.exports = {
  name: "pp",
  description: "Another fun Command",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let target = message.mentions.members
      ? message.mentions.members.first()
      : message.author;

    const ppSize = Math.floor(Math.random() * 10);

    ppSize = ppSize * "=";
    const ppSizeEmbed = new Discord.MessageEmbed()
      .setTitle(`Gay Machine Calculator`)
      .setDescription(`${target.username}'s pp: 8` + ppSize + "D")
      .setColor("BLUE");

    message.channel.send({ embeds: [ppSizeEmbed] });
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