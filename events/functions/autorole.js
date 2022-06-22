const roleData = require("../../database/guildData/autorole");

module.exports = async (member) => {
  const data = await roleData
    .findOne({
      GuildID: member.guild.id,
    })
    .catch((err) => console.log(err));

  if (data) {
    let role = data.Role;
    let arole = member.guild.roles.cache.get(role);
    if (role) {
      member.roles.add(arole);
    } else if (!role) {
      return;
    }
  } else if (!data) {
    return;
  }
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