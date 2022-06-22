const discord = module.require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "Utility",
  usage: "avatar/avatar @user",
  description: "Gives avatar for message author or mentioned user.",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${user.username}'s Avatar`)
      .setDescription(
        `[Avatar Link](${user.displayAvatarURL({
          size: 2048,
          dynamic: true,
          format: "png",
        })})`
      )
      .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }));

    message.channel.send({ embeds: [embed] });
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