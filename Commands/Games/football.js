const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")

const eco = require('../../schemas/economy');

module.exports = {
    name: 'football',
    category: "games",
    description: 'soccer game :D',
    usage: '?football',
    aliases: ['soccer'],
    timeout: 60,
    run : async (client, message, args) => {

      let profile; 
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        if(message.author.bot) return message.channel.send(`Bots dont have bal`)
        profile = await eco.create({
          userID: message.author.id,
          coins: 500,
          bank: 0,
          maxBank: 1000
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }
     
    const positions = {
      LEFT: `Hit the ball\n🥅🥅🥅\n🕴_ _\n\n_ _     ⚽`,
      MIDDLE: `Hit the ball\n🥅🥅🥅\n_ _     🕴\n\n_ _     ⚽`,
      RIGHT: `Hit the ball\n🥅🥅🥅\n_ _           🕴\n\n_ _     ⚽`
    }

    let randomized = Math.floor(Math.random() * Object.keys(positions).length);
    let gameEnded = false;
    let randomPos = positions[Object.keys(positions)[randomized]];

    let leftbutton = new MessageButton()
    .setCustomId('LEFT')
    .setLabel('Left')
    .setStyle('SECONDARY')

    let middlebutton = new MessageButton()
    .setCustomId('MIDDLE')
    .setLabel('Middle')
    .setStyle('SECONDARY')

    let rightbutton = new MessageButton()
    .setCustomId('RIGHT')
    .setLabel('Right')
    .setStyle('SECONDARY')

    const row = new MessageActionRow()
    .addComponents(
      leftbutton,
      middlebutton, 
      rightbutton
    )

    const disabledrow = new MessageActionRow()
    .addComponents(
      leftbutton.setDisabled(true).setStyle("DANGER"),
      middlebutton.setDisabled(true).setStyle("DANGER"),
      rightbutton.setDisabled(true).setStyle("DANGER")
    )

    const sentMsg = await message.channel.send({content: `${randomPos}`, components: [row]})


    function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			sentMsg.edit({
				content: randomPos,
				components: [row],
			});
		}
    setInterval(() => {
      if(gameEnded == false) return update()
    }, 2000)


    let amount = Math.floor(Math.random() * 500) + 250

    let embedWin = new MessageEmbed()
    .setTitle(`You Won!`)
    .setDescription(`${message.author.username} you won ${number(amount)} `)
    .setColor("F4C2C2")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()

    let embedLoose = new MessageEmbed()
    .setTitle(`You Lost!`)
    .setDescription(`${message.author.username} you lost the football game! Try again... `)
    .setColor(Color)
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()

    const collector = message.channel.createMessageComponentCollector({max:1, time: 8000})

    collector.on('collect', async i => {
      if(i.user.id !== message.author.id) return i.reply({content: 'this is not your game! Start one by typing **?football**', ephemeral: true})

      if(i.customId !== Object.keys(positions)[randomized]) {
        gameEnded = true;
        i.update({components: [disabledrow]})
        message.reply({embeds: [embedWin], components: [], content: " "})
        try {
          await eco.findOneAndUpdate(
              {
                userID: message.author.id,
              },
              {
                $inc: {
                  coins: amount,
                },
              }
            );
          } catch (err) {
            console.log(err);
          }
      } else if(i.customId == Object.keys(positions)[randomized]) {
        gameEnded = true;
        i.update({components: [disabledrow]})
        message.reply({embeds: [embedLoose], components: [], content: " "})
      }
    })

    collector.on('end', async i => {
      if(!i.size) return sentMsg.edit({components: [disabledrow]})
    })


}
      }