const Discord = module.require("discord.js");

module.exports = {
  name: "emoji",
  description: "Get ID of emojis",
  options: [
      {
        name: "name",
        description: "Emoji to get ID of",
        type: 'STRING',
      }
  ],
  run: async (client, interaction, args) => {
      if (interaction.options.getString('name') === undefined) {
          return interaction.reply("Please specify an emoji to get the ID of.");
      }
      const emojiName = interaction.options.getString('name');
      const emoji = client.emojis.cache.find(emoji => emoji.name === emojiName);
    if (!emoji) {
      return interaction.reply(
        "Couldn't find the Emojis with the provided name. Please make sure the Emoji name is correct"
      );
    }
     interaction.reply(`\`\`\`${emoji}\`\`\``);
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