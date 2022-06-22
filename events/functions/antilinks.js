const antilinkData = require("../../database/guildData/antilink");
const ms = require('ms')

module.exports = async (message) => {
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      let msg = message.channel.send("No links allowed while anti-link is active!").then((msg) => {
          let time = "2s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
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