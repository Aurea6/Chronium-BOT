const Discord = module.require("discord.js");
const djsGames = require('djs-games')

module.exports = {
  name: "guessthenumber",
  description: "Guess The Number.",
  run: async (client, message, args) => {
    const guessTheNumber = new djsGames.GuessTheNumber()
    guessTheNumber.startGame(message)
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