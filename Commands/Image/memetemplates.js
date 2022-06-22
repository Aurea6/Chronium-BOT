const Discord = module.require("discord.js");

module.exports = {
  name: "memetemplates",
  description: "Get all the available meme templates",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setTitle("Available Meme Templates")
      .setDescription(
        "Usage Example: `//creatememe facepalm Hello Bye`\n`sohappy`,`tenguy`,`afraid`,`apcr`,`older`,`aag`,`atis`,`alyt`,`biw`,`stew`,`blb`,`bihw`,`kermit`,`bd`,`ch`,`cbg`,`wonka`,`cb`,`gandalf`,`keanu`,`cryingfloor`,`dsm`,`disastergirl`,`live`,`ants`,`doge`,`trump`,`drake`,`ermg`,`facepalm`,`feelsgood`,`firsttry`,`fwp`,`fa`,`fbf`,`fmr`,`fry`,`ggg`,`grumpycat`,`harold`,`hipster`,`icanhas`,`crazypills`"
      )
      .setTimestamp()
      .setColor("RANDOM");
    return message.channel.send({ embeds: [embed] });
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