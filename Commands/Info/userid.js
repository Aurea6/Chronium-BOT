const Discord = module.require("discord.js");

module.exports = {
  name: "userid",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if (!mention) return message.channel.send("Mention a user to get their ID");
    const lolicon = mention.user.avatarURL;
    const lolid = new Discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Here is " + `${mention.user.username}\'s ID`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
    message.channel.send({ embeds: [lolid] });
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