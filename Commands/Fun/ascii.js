const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
  name: "ascii",
  aliases: [],
  category: "Fun",
  usage: "ascii <text>",
  description: "Returns provided text in ascii format.",
  run: async (client, message, args) => {
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`\`Usage: //ascii <msg>\``);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
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