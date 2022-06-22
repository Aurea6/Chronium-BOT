const Discord = module.require("discord.js");

module.exports = {
  name: "delrole",
  description: "Deletes a role",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const role = message.mentions.roles.first();
   
    if (!role) {
      return message.channel.send("`Usage: =delrole <role>`");
    }
    role.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle("Roles Update")
      .setDescription(`${role} role has been deleted`)
      .setColor("RANDOM");
    await message.channel.send({ embeds: [embed] });
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