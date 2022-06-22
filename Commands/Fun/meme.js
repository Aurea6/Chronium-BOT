const Discord = module.require("discord.js");

module.exports = {
  name: "meme",
  description: "Sends a random meme",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    var num = Math.floor(Math.random() * (500 - 1) + 1);
    message.channel.send({
      files: [
        {
          attachment: `https://ctk-api.herokuapp.com/meme/${num}`,
          name: "meme.jpg",
        },
      ],
    });
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