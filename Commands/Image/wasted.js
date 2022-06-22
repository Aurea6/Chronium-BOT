const Discord = module.require("discord.js");

module.exports = {
  name: "wasted",
  description: "Put the GTA Wasted pic over avatars!",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      return message.channel.send("Wasted? Who?");
    }
    const avatar = user.user.displayAvatarURL({ size: 2048, format: "png" });

    await message.channel.send({
      files: [
        {
          attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`,
          name: "wasted.jpg",
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