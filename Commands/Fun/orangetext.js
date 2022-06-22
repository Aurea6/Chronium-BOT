const Discord = module.require("discord.js");

module.exports = {
  name: "orangetext",
  description: " Colors the Text woth Orange Color",
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send("You need to enter some text");
    }
    message.channel.send(`\`\`\`fix\n${text}\n\`\`\``);
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