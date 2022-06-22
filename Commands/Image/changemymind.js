const { Message } = require("discord.js");

const Discord = module.require("discord.js");

module.exports = {
  name: "changemymind",
  description: "Image Manipulation Command",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const text = args.join("+");
    if (!text) {
      return message.channel.send("Enter some text!");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/changemymind?text=${text}`,
          name: "changemymind.png",
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