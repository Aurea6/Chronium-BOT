const Discord = module.require("discord.js");

module.exports = {
  name: "weather",
  description: "Shows Weather for the provided place",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const name = args.join(" ");
    const place = args.join("-");
    if (!place) {
      return message.channel.send(
        "Please enter the name of a Country/City/Town"
      );
    }
    const link = `https://wttr.in/${place}.png?m`;
    const weblink = `https://wttr.in/${place}`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}'s Weather for Next 3 days`)
      .setImage(link)
      .setFooter("Credits to `wttr.in` for allowing us to use their data.")
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
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