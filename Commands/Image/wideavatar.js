const Discord = module.require("discord.js");

module.exports = {
  name: "wideavatar",
  description: "Get a  widened avatar of a user",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const mention = message.mentions.members.first() || message.member;
    const avatar = mention.user.displayAvatarURL({
      dynamic: true,
      size: 2048,
      format: "png",
    });

    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/wide?image=${avatar}`,
          name: "wideavatar.png",
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