const Discord = module.require("discord.js");

module.exports = {
  name: "nickname",
  description: "Change the Nickname of other Users",
  userPerms: ["MANAGE_NICKNAMES"],
  botPerms: ["MANAGE_NICKNAMES"],
  run: async (client, message, args) => {
    let mentionMember = message.mentions.members.first();
    let newNickname = args.slice(1).join(" ");
    if (!mentionMember) {
      return message.reply("Mention the user you want to change the nickname");
    }
    if (!newNickname) {
      return message.reply("Input the new nickname for the user you mentioned");
    }
    try {
      mentionMember.setNickname(newNickname);
    } catch (error) {
      message.reply(
        "Can't change nickname of this user, does he have a higher role? Is the server creator? Have I got the permission to change his nickname?"
      );
    }
    message.channel.send(
      `Changed nickname of ${mentionMember} to **${newNickname}**`
    );
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