const Discord = module.require("discord.js");

module.exports = {
  name: "vaportext",
  description: "Fun Command",
  run: async (client, message, args) => {
    if (!args.length) {
      return message.channel.send("You need to enter some text");
    }
    let msg = "";
    for (let i = 0; i < args.length; i++) {
      msg += args[i].toUpperCase().split("").join(" ") + " ";
    }
    message.channel.send(msg);
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