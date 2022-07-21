const Discord = require("discord.js");

let {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
} = require("discord.js");

const Color = `#ffcc00`;
let timerSchema = require("../../schemas/timer");

let ms = require("ms");

module.exports = {
  name: "timer",
  category: "category",
  description: "description",
  usage: "usage",
  aliases: ["reminder"],
  timeout: 0,
  boostersOnly: false,
  run: async (client, message, args) => {
    

    if (!args[0] || !["set", "delete", "list"].includes(args[0])) {
      let command = message.content.split(" ")[0].toLowerCase();
      let infoEmbed = new MessageEmbed()
        .setTitle(`Timer Sub-Commands`)
        .addField(`${command} set`, `Usage: ${command} set <duration> <reason>`)
        .addField(`${command} delete`, `Usage: ${command} delete <timer id>`)
        .addField(`${command} list`, `Usage: ${command} list`)
        .setColor(Color);
      return message.channel.send({ embeds: [infoEmbed] });
    }

    let subcmd = args[0].toLowerCase();

    let dmbtn = new MessageButton()
      .setCustomId("LOCATION_DM")
      .setLabel(`Dm`)
      .setStyle(`PRIMARY`)
      .setEmoji("🔔");

    let chbtn = new MessageButton()
      .setCustomId("LOCATION_CHANNEL")
      .setLabel(`Channel`)
      .setStyle(`PRIMARY`)
      .setEmoji("🔔");

    let locationRow = new MessageActionRow().addComponents(dmbtn, chbtn);

    if (subcmd == "set") {
      if (!args[1]) return message.reply(`You didnt specify the duration!`);

      let duration = Math.floor(ms(args[1]) / 1000.0);

      if (!args[2]) return message.reply(`You didnt specify the reason!`);

      let reason = args.slice(2).join(" ");

      let params = {
        user: message.author.id,
        guild: message.guild.id,
        endsAt: Math.floor(new Date().getTime() / 1000.0) + duration,
        channel: message.channel.id,
        reason,
        duration,
      };

      let sentMsg = await message.reply({
        content: "Where should i notify you?",
        components: [locationRow],
      });

      let clctor = sentMsg.createMessageComponentCollector({
        time: 60000,
      });

      let disabledRow = new MessageActionRow().addComponents(
        dmbtn.setDisabled(true).setStyle(`SECONDARY`),
        chbtn.setDisabled(true).setStyle(`SECONDARY`)
      );

      clctor.on("collect", (i) => {
        const id = i.customId;

        if (i.user.id !== message.author.id)
          return i.reply({
            content: "this is not for you..",
            ephemeral: true,
          });

        if (id == "LOCATION_DM") {
          clctor.stop("dm");
        } else if (id == "LOCATION_CHANNEL") {
          clctor.stop("channel");
        }
      });

      clctor.on("end", async (i, reason) => {
        if (reason == "time") {
          sentMsg.edit({ components: [disabledRow] });
        } else {
          params.location = reason;
          let create = await timerSchema.create(params);
          let embed = new MessageEmbed()
            .setTitle(`Reminder set!`)
            .setDescription(
              `I will remind you in ${
                reason == "dm" ? "your dms" : "this channel"
              } for \`${params.reason}\` in **${ms(duration * 1000, {
                long: true,
              })}**!`
            )
            .setColor(Color)
            .setFooter(`Your timer id: ${create._id}`);
          if (create)
            return sentMsg.edit({
              components: [],
              embeds: [embed],
              content: "**Your reminder**",
            });
        }
      });
    }

    if (subcmd == "delete") {
      if (!args[1])
        return message.channel.send(
          `:x: | Please specify a timer id to delete`
        );
      let timerID;
      try {
        timerID = await timerSchema.findOne({
          _id: args[1],
        });
      } catch (e) {
        return message.channel.send(`That timer id doesnt exist`);
      }

      if (
        timerID &&
        timerID.user !== message.author.id &&
        !message.member.permissions.has("ADMINISTRATOR")
      )
        return message.channel.send(`This timer isnt yours!`);

      let deleted = await timerSchema.findOneAndDelete({
        _id: args[1],
      });
      if (deleted) return message.channel.send(`Timer deleted!`);
    }

    if (subcmd == "list") {
      let found = await timerSchema.find({
        user: message.author.id,
      });

      if (!found || found.length == 0)
        return message.channel.send(`You have no active timer!`);
      let desc = found.map((v, i) => {
        return `\`(#${i + 1})\` - **${v.reason}** (<t:${
          v.endsAt
        }:R>)\n**ID:** ${v._id}`;
      });
      let embed = new MessageEmbed()
        .setTitle(`Your timers:`)
        .setDescription(`${desc.join("\n\n")}`);
      message.channel.send({ embeds: [embed] });
    }
  },
};
