const Discord = module.require("discord.js");

module.exports = {
  name: "clap",
  description: "Add clap emoji between each word",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("`Usage: //clap <msg>`");
    }
    message.channel.send(args.join(" ").replace(/ /g, " 👏 "));
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