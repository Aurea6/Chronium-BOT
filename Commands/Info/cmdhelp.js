const Discord = require('discord.js')
const { readdirSync } = require("fs");

const prefix = require("../../botconfig/main").prefix;

let { MessageEmbed } = require("discord.js")

const ms = require('ms')

const Color = `#ffdf5c`

module.exports = {
    name: 'command',
    category: "help",
    description: 'Shows information about commands',
    usage: '?command <commands>',
    timeout: 15,
    aliases: ['commands', 'cmd'],
    
    run : async (client, message, args, cmd, command) => {

      if(!args[0]) return message.channel.send(`:x: | specify the command!`)

    
      let cots = [];
      let catts = [];

      readdirSync("./commands/").forEach((dir) => {
        if (dir.toLowerCase() !== args[0].toLowerCase()) return;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          let des = `${client.commands.get(name).description}`;
          let emo = `${client.commands.get(name).emoji}`;

          let obj = {
            cname: `${emo} \`${name}\``,
            des,
          };

          return obj;
        });

        let dota = new Object();

        cmds.map((co) => {
          dota = {
            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
            value: co.des ? co.des : "No Description",
            inline: true,
          };
          catts.push(dota);
        });

        cots.push(dir.toLowerCase());
      });

      // console.log(cots);

      const commands = client.commands.get(args[0].toLowerCase())
      client.commands.find(
        (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
      ) || client.commands.get(client.aliases.get(cmd));
      
      if (!commands) {
        const embed = new MessageEmbed()
          .setDescription(
            `Invalid command! Use \`${prefix}help\` for all of my commands!`
          )
          .setColor("RED");
        return message.channel.send({ embeds: [embed] });
      }

      const embed = new MessageEmbed()
        .setTitle("__Command Details:__")
        .addField(
          "Command Name:",
          commands.name ? `\`${commands.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases:",
          commands.aliases[0]
            ? `\`${commands.aliases.join("` | `")}\``
            : "No aliases for this command."
        )
        
        .addField(
          "Command Description:",
          commands.description
            ? commands.description
            : "No description for this command."
        )
        .addField(
          `Cooldowns`,
          commands.timeout
          ? `${ms(commands.timeout * 1000, { long: true })}`
          : "No cooldown"
        )
        .setThumbnail(
          client.user.displayAvatarURL(
            {
              dynamic: true
            }
          )
        )
        .setTimestamp()
        
        
      return message.channel.send({ embeds: [embed] });
      
    }
        }