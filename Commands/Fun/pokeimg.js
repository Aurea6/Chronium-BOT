const Discord = module.require("discord.js");

module.exports = {
  name: "pokeimg",
  description: "Get Image of the Mentioned Pokemon",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const state = "enabled";
    if (state === "disabled") {
      return message.channel.send("The command has been disabled for now!");
    }
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("Please type the Pokemon Name");
    }
    const link = `https://i.some-random-api.ml/pokemon/${name}.png`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}`)
      .setImage(link)
      .setColor("RANDOM");

    message.channel.send({embeds: [embed]});
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