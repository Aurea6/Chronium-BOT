const { Client, Message, MessageEmbed } = require("discord.js");
const child = require("child_process");

module.exports = {
  name: "terminal",
  description: "Only for owners to run terminal in discord!",
  
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "976413539076026388") return;

    const command = args.join(" ");
    const embed = new MessageEmbed()
      .setDescription("please give a command to run in terminal!")
      .setColor("#303136");
    if (!command) return message.channel.send({ embeds: [embed] });

    child.exec(command, (err, res) => {
      if (err) return console.log(err);
      message.channel.send("```js\n" + res.slice(0, 2000) + "\n```", {
        code: "js",
      });
    });
  },
};