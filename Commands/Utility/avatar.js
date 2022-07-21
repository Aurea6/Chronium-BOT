const { Client, Message, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Check yourself or user's avatar",
    category: 'Fun Image/Gif Command',
    aliases: ["av","avt"],
    cooldown: 10,
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const png = member.user.displayAvatarURL({ dynamic: false, format: 'png' });
        const jpg = member.user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        const webp = member.user.displayAvatarURL({ dynamic: false, format: 'webp' });
        const gif = member.user.displayAvatarURL({ dynamic: true });
        // const bmp = member.user.displayAvatarURL({ dynamic: false, format: 'bitmap' });

        const avatarMenu = new MessageActionRow().addComponents(
            new MessageSelectMenu({
                placeholder: 'Choose the Image Size',
                customId: 'main',
                options: [
                    {
                        label: '128 pixels',
                        value: "Option 1",
                        emoji: '🖼️',
                    },
                    {
                        label: '256 pixels',
                        value: "Option 2",
                        emoji: '🖼️',
                    },
                    {
                        label: '[Original] 1024 pixels',
                        value: "Option 0",
                        emoji: '🖼️',
                    },
                ]
            }),
        );

        const avtEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Size : 1024px')
            .setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
            .setDescription(`Download Avatar Image At:\n**[png](${png}) | [jpg](${jpg}) | [gif](${gif}) | [webp](${webp})**` || `**[png](${png}) | [jpg](${jpg})**`)

        let avt = await message.channel.send({ content: 'Avatar ' + member.user.tag, embeds: [avtEmbed], components: [avatarMenu] })

        const filter = async interaction => {

            if (interaction.user.id !== message.author.id) {
                interaction.reply({
                    content: "<:AAcross_box:864690410232610836> Don't help other people to select the menu",
                    ephemeral: true
                });
                return false;
            };
            return true;
        }

        const collector = avt.createMessageComponentCollector({
            filter,
            componentType: 'SELECT_MENU',
            time: 50000,
        })

        collector.on('collect', async (menu) => {
            if (menu.values[0] === 'Option 1') {
                menu.update({
                    embeds: [
                        avtEmbed.setTitle('Size : 128px').setImage(member.user.displayAvatarURL({ size: 128, dynamic: true, format: 'png' }))
                    ]
                })
            } else if (menu.values[0] === 'Option 0') {
                menu.update({
                    embeds: [
                        avtEmbed.setTitle('Size : 1024px').setImage(member.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
                    ]
                })
            } else if (menu.values[0] === 'Option 2') {
                menu.update({
                    embeds: [
                        avtEmbed.setTitle('Size : 256px').setImage(member.user.displayAvatarURL({ size: 256, dynamic: true, format: 'png' }))
                    ]
                })
            }
        })

        collector.on('end', async (menu) => {
            avt.edit({ components: [] });
        })
    }
                                                   }