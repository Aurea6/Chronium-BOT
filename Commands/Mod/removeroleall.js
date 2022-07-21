const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require("discord.js") 

module.exports = {
  name: "removeroleall",
  aliases: ["rrall", "rroleall", "remroleall"],
  description: "Remove a role to all user of the current server",
  category: "admin",
  args: true,
  usage: "addroleall <roles>",
  userpermissions: ["MANAGE_ROLES"],
  botpermissions: ["MANAGE_ROLES"],
  run: async (client, message, args) => {
    const role =
      message.guild.roles.cache.find(
        role => role.name === args.join(" ").slice(1)
      ) ||
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args.join(" ").slice(1));

    if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
      return message.reply(
        `My role is not high enough than **${
          role.name
        }** role!`,
        { message }
      );
    }

    if (message.member.roles.highest.comparePositionTo(role) < 0) {
      return message.reply(
        ` Your role must be higher than **${
          role.name
        }** role!`,
        { message }
      );
    }

    if (!role) {
      return message.reply("Please provide a valid role",
        { message }
      );
    }
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Bots")
        .setCustomId("bot"),
      new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Members")
        .setCustomId("member")
    );
    let embed = new MessageEmbed().setDescription(
      "Choose, the Roles are remove to all types?"
    );
    let msg = await message.channel.send({
      embeds: [embed],
      components: [row]
    });
    let filter = i => i.user.id === message.author.id;
    let collector = msg.createMessageComponentCollector({
      filter
    });
    collector.on("collect", async i => {
      if (i.customId === "member") {
        message.guild.members.cache
          .filter(member => !member.user.bot)
          .map(a => a.roles.remove(role));
        msg.delete();
        return message.reply(
          `Successfully removed **${
            role.name
          }** to Members`,
          { message }
        );
      }
      if (i.customId === "bot") {
        message.guild.members.cache
          .filter(member => member.user.bot)
          .map(a => a.roles.remove(role));
        msg.delete();
        return message.reply(
          `Successfully removed **${
            role.name
          }** to Bots`,
          { message }
        );
      }
    });
  }
};
