const Discord = module.require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movies",
  botPerms: ["EMBED_LINKS"],
  enabled: false,
  run: async (client, message, args) => {
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("Please Give the name of a movie or series!");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" });

    let movie = await imob.get({ name: args.join(" ") });

    const embed = new Discord.MessageEmbed()
      .setTitle(movie.Title)
      .setColor("RANDOM")
      .setThumbnail(movie.poster)
      .setDescription(
        `Description: \`${movie.plot}\`\nRatings: \`${movie.ratings}\`\nCountry: \`${movie.country}\`\nLanguages: \`${movie.languages}\`\nType: \`${movie.type}\``
      );
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