const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "Get ID of emojis",
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("Please type the emoji name");
    }
    if (!emoji) {
      return message.channel.send(
        "Couldn't find the Emojis with the provided name. Please make sure the Emoji name is correct"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
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