const Discord = require("discord.js");

const sleep = (ms) => {
  if (!ms) throw new TypeError("Time isn't specified");
  return new Promise((resolve) => setTimeout(resolve, ms));
};
module.exports = {
  name: "purge",
  category: "moderation",
  aliases: ["clear", "delete", "prune"],
  run: async(client, message, args) =>{
    let prefix = ",";
    try {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.reply({
          content:
            "You don't have **MANAGE_MESSAGES** premssions to use this command.",
        });
      if (!message.guild.me.permissions.has("MANAGE_MESSAGES"))
        return message.reply({
          content:
            "I don't have **MANAGE_MESSAGES** permissions to use this command.",
        });

      const commands = [
        `bots\` - Delete messages sent by bots. (Ignore humans)`,
        `humans\` - Delete messages sent by humans. (Ignore bots)`,
        `embeds\` - Delete messages containing rich embeds.`,
        `files\` - Delete messages containing files/images/attachments.`,
        `mentions\` - Delete messages containing member/user/channel/role mentions.`,
        `pins\` - Delete messages which are pinned.`,
        `text\` - Delete messages containing only text. (Ignores files/images/attachments, embeds)`,
        `match\` <text> - Delete messages containing text.`,
        `not\` <text> - Delete messages not containing text.`,
        `startswith\` <text> - Delete messages starts with text.`,
        `endswith\` <text> - Delete messages ends with text.`,
      ];

      const embd = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Purge | Clear | Delete | Prune")
        .setDescription(
          `Delete a number of messages from a channel. (Ignores the pinned messages and limit is 100)`
        )
        .addField(
          "Usage",
          `\`${prefix}purge <amount>\` - Delete a number of messages.\n\`${prefix}purge <amount> --${commands.join(
            `\n\`${prefix}purge <amount> --`
          )}`
        )
        .setFooter(
          `${prefix}purge, ${prefix}clear, ${prefix}delete, ${prefix}prune`
        );

      if (!args[0] || !args.length)
        return message.channel.send({ embeds: [embd] });
      let amount = Number(args[0], 10) || parseInt(args[0]);
      if (isNaN(amount) || !Number.isInteger(amount))
        return message.channel.send({
          content: "Please enter a number of messages to purge.",
        });
      if (!amount || amount < 2 || amount > 100)
        return message.channel.send({
          content: "Please enter a number of message between 2 and 100.",
        });
      if (!args[1]) {
        try {
          await message.delete();
          await message.channel.bulkDelete(amount).then(async (m) => {
            let embed = new Discord.MessageEmbed()
              .setColor("0x#00ffff")
              .setDescription(
                `✅  Cleared **${m.size}**/**${amount}** messages!`
              );

            message.channel.send({ embeds: [embed] }).then(async (msg) => {
              await sleep(50000);
              msg.delete();
            });
          });
        } catch (e) {
          console.log(e);
          message.channel.send({
            content: `You can only delete the messages which are not older than 14 days.`,
          });
        }
      } else if (args[1]) {
        let msg;
        let data;
        let embed;
        switch (args[1]) {
          case "--bots":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (ms.author.bot && !ms.pinned) data.push(ms);
              });

            try {
              await message.delete();
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--humans":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!ms.author.bot && !ms.pinned) data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--embeds":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (ms.embeds.length && !ms.pinned) data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--files":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (ms.attachments.first() && !ms.pinned) data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--text":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!ms.attachments.first() && !ms.embeds.length && !ms.pinned)
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--mentions":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (
                  (ms.mentions.users.first() ||
                    ms.mentions.members.first() ||
                    ms.mentions.channels.first() ||
                    ms.mentions.roles.first()) &&
                  !ms.pinned
                )
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--pins":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (ms.pinned) data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--match":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!args[2]) return message.channel.send(embd);
                if (ms.content.includes(args.slice(2).join(" ")) && !ms.pinned)
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--not":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!args[2]) return message.channel.send(embd);
                if (!ms.content.includes(args.slice(2).join(" ")) && !ms.pinned)
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--startswith":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!args[2]) return message.channel.send(embd);
                if (
                  ms.content.startsWith(args.slice(2).join(" ")) &&
                  !ms.pinned
                )
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          case "--endswith":
            msg = await message.channel.messages.fetch({ limit: amount });
            data = [];
            msg
              .map((m) => m)
              .forEach((ms) => {
                if (!args[2]) return message.channel.send(embd);
                if (ms.content.endsWith(args.slice(2).join(" ")) && !ms.pinned)
                  data.push(ms);
              });

            try {
              await message.channel
                .bulkDelete(data.length ? data : 1, true)
                .then(async (m) => {
                  embed = new Discord.MessageEmbed()
                    .setColor("0x#00ffff")
                    .setDescription(
                      `✅  Cleared **${m.size}**/**${amount}** messages!`
                    );

                  message.channel
                    .send({ embeds: [embed] })
                    .then(async (msg) => {
                      await sleep(50000);
                      msg.delete();
                    });
                });
            } catch (e) {
              console.log(e);
              message.channel.send({
                content: `You can only delete the messages which are not older than 14 days.`,
              });
            }

            break;
          default:
            return message.channel.send({ embeds: [embd] });
            break;
        }
      } else {
        return message.channel.send({ content: `An error occoured.` });
      }
    } catch (error) {
      console.log(error);
      message.channel.send({ content: `An error occurred: \`${error}\`` });
    }
  },
};
