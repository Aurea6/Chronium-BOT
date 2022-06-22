module.exports = {
  name: "say",
  description: "Make the bot say your message",
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (!args.join(" ")) {
      message.channel.send("Please add some text for me to repeat");
    }
    message.channel.send(args.join(" "), {
      allowedMentions: { parse: ["users"] },
    });
    message.delete();
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