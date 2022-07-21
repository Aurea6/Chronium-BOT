const { Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "dump",
  
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send("**Please Enter A Role!**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Please Enter A Valid Role!**");

        let mem = message.guild.members.cache.filter((member) => {
            return member.roles.cache.get(role.id);
          })
          .map((member) => {
            return member.user.tag;
          });
        
        message.channel.send(`${mem.join("\n")}`);

    }
}