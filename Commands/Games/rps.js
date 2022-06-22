const Discord = module.require("discord.js");
const simplydjs = require("simply-djs");

module.exports = {
  name: "rps",
  description: "Rock paper scissors in discord!",
  run: async (client, message, args) => {
    simplydjs.rps(message)
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