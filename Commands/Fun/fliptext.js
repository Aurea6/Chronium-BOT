const Discord = module.require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  description: "Flip some text",
  usage: "fliptext <text>",
  type: "Fun",
  run: async (client, message, args) => {
    if (args.length < 1) {
      return message.channel.send("Please enter some text to flip");
    }
    args.reverse();
    var flipped = [];

    args.forEach((arg) => {
      flipped.push(flip(arg));
    });

    message.channel.send(flipped.join(" "));
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