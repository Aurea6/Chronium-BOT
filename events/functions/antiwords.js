const antiwordsData = require('../../database/guildData/antiwords')
  module.exports = async (message) => {
    const antiwords = await antiwordsData.findOne({
      GuildID: message.guild.id,
    })
    if (antiwords) {
      if (message.content.match("bitch") || message.content.match("hoe") || message.content.match("slut") || message.content.match("nigga") || message.content.match("nigg") || message.content.match("dick") || message.content.match("cunt") || message.content.match("shit") || message.content.match("fuck")) {
        message.delete();
        message.reply("**No Bad Words Allowed Please Stop!**").then(msg => {
          let time = '4s'
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        })
      } else {
        return;
      }
    } else if (!antiwords) {
      return;
    }
  }
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */