const playerEvent = (event) => require(`../events/player/${event}`);
const Discord = require("discord.js");

function loadPlayerEvents(client) {
  const cooldowns = new Discord.Collection();

  client.player.on("botDisconnect", (m) => playerEvent("botDisconnect")(m, client));
  client.player.on("channelEmpty", (m) => playerEvent("channelEmpty")(m, client));
  client.player.on("connectionCreate", (m, n) => playerEvent("connectionCreate")(m, n, client));
  client.player.on("connectionError", (m, n) => playerEvent("connectionError")(m, n, client));
  client.player.on("error", (m, n) => playerEvent("error")(m, n, client));
  client.player.on("queueEnd", (m) => playerEvent("queueEnd")(m, client));
  client.player.on("trackAdd", (m, n) => playerEvent("trackAdd")(m, n, client));
  client.player.on("tracksAdd", (m, n) => playerEvent("tracksAdd")(m, n, client));
  client.player.on("trackStart", (m, n) => playerEvent("trackStart")(m, n, client));

}
module.exports = {
  loadPlayerEvents,
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