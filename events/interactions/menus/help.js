const Discord = require('discord.js')

module.exports = async(interaction, client) => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === "help_menu") {

        let msg = await interaction.channel.messages.fetch(interaction.message.id)

        if (interaction.values[0] === "settings") {
            await interaction.deferUpdate()

            const settingsEmbed = new Discord.MessageEmbed()
        .setTitle("Config Commands")
        .setDescription(
          "`antilink`, `antiwords`, `autorole`, `dashboard`, `prefix`, `set-count`, `set-goodbye`, `set-welcome`"
        )
        .setColor("RANDOM");

      await msg.edit({ embeds: [settingsEmbed] });

        } else if (interaction.values[0] === "fun") {
            await interaction.deferUpdate()

            const funEmbed = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .setDescription(
          "`8ball`, `activity`, `ascii`, `catsay`, `dab`, `emojify`, `fliptext`, `gif`, `greentext`, `howgay`, `hug`, `joke`, `kill`, `meme`, `nitro`, `orangetext`, `pixel`, `pokeimg`, `pp`, `respect`, `reverse`, `roast`, `slap`, `trivia`, `vaportext`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [funEmbed] });

        } else if (interaction.values[0] === "image") {

            await interaction.deferUpdate()

            const imageEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Image Commands")
            .setDescription(
              "`afraid`, `alert`, `amazeme`, `biden`, `changemymind`, `clyde`, `creatememe`, `cryingfloor`, `disastergirl`, `dockofshame`, `dodge`, `drake`, `facepalm`, `feelsgood`, `illegal`, `keanu`, `memetemplates`, `trigger`, `trumptweet`, `waster`, `wideavatar`"
            )

            await msg.edit({ embeds: [imageEmbed]})

            } else if (interaction.values[0] === "music") {
 
         await interaction.deferUpdate();
 
         const musicEmbed = new Discord.MessageEmbed()
         .setTitle(`Music Commands`)
         .setDescription("`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n\n```Note: Music commands work only with slash commands!```")
         .setColor("BLUE")
 
         await msg.edit({ embeds: [musicEmbed] })

        } else if (interaction.values[0] === "info") {

            await interaction.deferUpdate()

            const infoEmbed = new Discord.MessageEmbed()
        .setTitle("Info Commands")
        .setDescription(
          "`botinfo`, `emojiid`, `help`, `invite`, `ping`, `policy`, `report`, `userinfo`, `userid`, `serverinfo`, `suggest`, `cmdhelp`, `embed`, `invite`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [infoEmbed] })

        } else if (interaction.values[0] === "moderation") {
            await interaction.deferUpdate()

            const modEmbed = new Discord.MessageEmbed()
            .setTitle("Moderation Commands")
            .setDescription(
              "`kick`, `ban`, `softban`, `mute`, `unmute`, `tempmute`, `addroleall`, `nuke`, `purge`, `removeroleall`, `stealemoji`"
            )
            .setColor("RANDOM");

            await msg.edit({ embeds: [modEmbed] })

        }  else if (interaction.values[0] === "utility") {
            await interaction.deferUpdate()

            const utilityEmbed = new Discord.MessageEmbed()
        .setTitle("Utility Commands")
        .setDescription(
          "`avatar`, `animesearch`, `announce`, `calculator`, `clear`, `createrole`, `delchannel`, `delrole`, `enlargemoji`, `esay`, `giverole`, `google`, `imdb`, `lock`, `newtext`, `newvoice`, `nickname`, `poll`, `removerole`, `say`, `servericon`, `serverinfo`, `suggestion`, `translate`, `unlock`, `weather`, `wiki`, `afk`, `create-cc`, `delete-cc`, `dump`, `edit-cc`, `rolelist`, `serverinfo`, `snipe`, `ss`, `timer`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [utilityEmbed] })

      } else if (interaction.values[0] === "game") {
            await interaction.deferUpdate()

          const gameEmbed = new Discord.MessageEmbed()
        .setTitle("Game Commands")
        .setDescription(
          "`connect4 / C4`, `catchfish`, `catchthefish`, `chaoswords` `fasttype`, `fight`, `football`, `guessthenumber`, `guessthepokemon`, `gunfight`, `lieswatter`, `neverhaveiever`, `quickclick`, `roadrace`, `rps`, `shuffleguess`, `snake`, `trivia`, `ttt`, `wyr`"
        )
        .setColor("RANDOM");

        await msg.edit({ embeds: [gameEmbed] })
      } else if (interaction.values[0] === "activities") {
            await interaction.deferUpdate()
            
        const activityEmbed = new Discord.MessageEmbed()
        .setTitle("Activity Commands")
        .setDescription(
          "`awkword`, `betrayal`, `chess`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`"
        )
        .setColor("RANDOM");

await msg.edit({ embeds: [activityEmbed] })
      } else if (interaction.values[0] === "economic") {
            await interaction.deferUpdate()
            
        const economicEmbed = new Discord.MessageEmbed()
        .setTitle("Economy Commands")
        .setDescription(
          "`adopt`, `bal`, `beg`, `buy`, `daily`, `dep`, `fish`, `gamble` `give` `hunt` `inv` `multi` `petlist` `postmeme` `rich` `rob` `search` `sell` `shop` `use` `with`"
        )
        .setColor("RANDOM");
await msg.edit({ embeds: [economicEmbed] })
      } else if (interaction.values[0] === "code") {
            await interaction.deferUpdate()
            
        const codeEmbed = new Discord.MessageEmbed()
        .setTitle("My source code")
        .setDescription(
          "Make sure to not remove credits/n> [Github](https://github.com/iRed-Github/Chronium-BOT)\n[Repl.it Link](https://repl.it/@flute-chan/Chronium-BOT?v=1)"
        )
        .setColor("RANDOM");

      }
    }
}
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */
