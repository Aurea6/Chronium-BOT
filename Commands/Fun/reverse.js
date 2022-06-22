const Discord = module.require("discord.js");

module.exports = {
  name: "reverse",
  description: "Reverse the text entered",
  run: async (client, message, args) => {
    let str = args.join(" ");
    if (!str) {
      return message.channel.send("Enter some text to be reversed");
    }
    message.channel.send(str.split("").reverse().join(""));
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