const { MessageEmbed, Message } = require("discord.js");
const schema = require("../../schemas/premium")
const config = require(`../../botconfig/main.json`);
const day = require("dayjs")


module.exports = {
    name: `addpremium`,
    category: `Premium`,
    aliases: [`ap`],
    description: `Add Premium`,
    usage: `addpremium <id> <time>`,
    options: [
        {
            name: "guild",
            description: "Guild Id",
            required: true,
            type: "STRING"
        }
    ],
    run: async (client, message, args) => {

        if (!config.developerID.includes(message.author.id)) {

            const nop = new MessageEmbed()
                
                .setDescription(`You are not allowed to run this command! Only Developers Are allowed to run this command`)
            return message.channel.send({ embeds: [nop] })


        }

        const aa = new MessageEmbed()
            .setDescription(`Please Provide A Guild Id...`)
            .setColor('#303037')
        const aaa = new MessageEmbed()
            .setDescription(`Please Provide A Valid Guild ID`)
            .setColor('#303037')
        if (!args[0]) return message.reply({ embeds: [aa] })
        if (!client.guilds.cache.has(args[0])) return message.reply({ embeds: [aaa] });




        schema.findOne({ Guild: args[0] }, async (err, data) => {

            if (data) data.delete();


            if (args[1]) {
                const Expire = day(args[1]).valueOf();

                new schema({
                    Guild: args[0],
                    Expire,
                    Permanent: false
                }).save();

            } else {
                new schema({
                    Guild: args[0],
                    Expire: 0,
                    Permanent: true
                }).save();

            }
            const guildop = args[0]
            const guildname = client.guilds.cache.get(guildop)

            const lol = new MessageEmbed()
                .setDescription(`✅ Successfully Added **${guildname.name}** In Premium List`)
                .setColor(`#303037`)
            message.reply({ embeds: [lol] })
        })




    },
    
              }