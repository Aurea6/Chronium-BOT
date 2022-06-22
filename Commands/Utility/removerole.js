const Discord = require("discord.js");

module.exports = {
  name: "removerole",
  description: "Take roles from users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["MANAGE_ROLES"],
  run: async (client, message, args) => {
   
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Please mention a user you want to take the role from"
      );
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Please mention a role");
    await user.roles.remove(role),
      message.channel.send(
        `${user}, ${role} role has been taken away from you`
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