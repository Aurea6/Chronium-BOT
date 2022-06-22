const Discord = module.require("discord.js");

module.exports = {
  name: "catsay",
  description: "Make the cat say your message",
  botPerms: ["ATTTACH_FILES", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();
    const state = "enabled";
    if (state === "disabled") {
      return message.channel.send("Command has been disabled for now");
    }
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send("What you want the cat to say?");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://cataas.com/cat/cute/says/${msg}`,
          name: "catsay.png",
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