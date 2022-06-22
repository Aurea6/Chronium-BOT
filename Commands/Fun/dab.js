const Discord = module.require("discord.js");

module.exports = {
  name: "dab",
  description: "Adds dab emoji after each word",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("`Usage: //dab <text>`");
    }
    message.channel.send(
      args.join(" ").replace(/ /g, " <:dab:907924640163328010>")
    );
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