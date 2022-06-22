const Discord = module.require("discord.js");

module.exports = {
  name: "slap",
  description: "Slaps a user",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("You need to mention a user");
    }
  const embed = new Discord.MessageEmbed()
    .setTitle(message.author.name + " slapped :raised_back_of_hand: " +
          member.displayName +
          ", " +
          member.displayName +
          " is now in the hospital! :hospital:")
      .setColor("RANDOM");
    await message.reply({ embeds: [embed] });
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