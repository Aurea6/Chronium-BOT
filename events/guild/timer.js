const {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
  Collection,
} = require("discord.js");

const client = require("../../index");
let emo = require("../../emojis");

let timerSchema = require("../../schemas/timer");

let ms = require("ms");

client.on("ready", () => {
  setInterval(async () => {
    let timer = await timerSchema.findOne({
      endsAt: Math.floor(new Date().getTime() / 1000.0),
    });
    if (!timer) return;
    if (timer.location == "dm") {
      let user = client.users.cache.get(timer.user);
      let embed = new MessageEmbed()
        .setTitle(`Your timer!`)
        .setDescription(`${timer.reason}`)
        .setFooter(`set ${ms(timer.duration * 1000, { long: true })} ago`)
        //.setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setColor("#ffcc00");
      user.send({ embeds: [embed] });

      await timerSchema.deleteOne({
        endsAt: Math.floor(new Date().getTime() / 1000.0),
      });
    } else if (timer.location == "channel") {
      let user = client.users.cache.get(timer.user);
      let channel = client.channels.cache.get(timer.channel);
      let embed = new MessageEmbed()
        .setTitle(`Your timer!`)
        .setDescription(`${timer.reason}`)
        .setFooter(`set ${ms(timer.duration * 1000, { long: true })} ago`)
		  .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setColor("#ffcc00");
      channel.send({ content: `<@!${timer.user}>`, embeds: [embed] });

      await timerSchema.deleteOne({
        endsAt: Math.floor(new Date().getTime() / 1000.0),
      });
    }
  }, 1000);
});