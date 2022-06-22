const Discord = module.require("discord.js");

module.exports = {
  name: "esay",
  description: "Send Messages in embed form",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Enter some text");
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(`${msg}`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
    message.delete();
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