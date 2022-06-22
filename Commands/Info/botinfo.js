/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Chronium Bot bot made by iRed.
* These points are not optional, but remarks from the dev team of Chronium Bot.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("My Statistics", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **Chronium \n**Owner: **iRed \n**Bot Version: ** v1.0.2 *STABLE*\n**Total Categories: **9 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "About me",
        "Chronium Bot is an open-source multi-purpose discord bot with features like moderation, music, logging, welcomer and so much more!\nYou can find the link to the [GitHub Repo Here](https://github.com/iRed-Github/Chronium-BOT)"
      )
      .addField(
        "Some Useful Links",
        "**Get your own bot!** **[Here](https://github.com/iRed-Github/Chronium-BOT)** \n**Need Help? Join our ** **[Support/Development Server](https://dsc.gg/idk-development)** **for assistance**"
      )
      .setFooter("Regards, Chronium Bot Development Team");
    message.channel.send({ embeds: [embed] });
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