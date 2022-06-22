const Discord = module.require("discord.js");

module.exports = {
  name: "howgay",
  description: "Just for fun command",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let target = message.mentions.members
      || message.mentions.members.first();

    let rng = Math.floor(Math.random() * 101);

    const howgayembed = new Discord.MessageEmbed()
      .setTitle(`Gay Machine Calculator`)
      .setDescription(`${target.user.username} is ` + rng + "% Gay🌈")
      .setColor("GREEN");

    message.channel.send({ embeds: [howgayembed] });
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