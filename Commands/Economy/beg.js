const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
const eco = require('../../schemas/economy');

module.exports = {
    name: 'beg',
    category: "category",
    description: 'description',
    usage: 'usage',
    aliases: [],
    timeout: 30,
    boostersOnly: false,
    // cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    let people = [
      "taylor swift",
      "drake",
      "dank memer",
      "fisherman",
      "your mum",
      "driver",
      "police",
      "Leonardo da Vinci",
      "Robert Downey Jr.",
      'Dwayne Johnson',
      'adele',
      'olivia rodrigo',
      'Travis Scott',
      'Cardi B',
      'Harry Styles',
      'dank memer',
      'mee6',
      'Dua Lipa',
      'Ed Sheeran',
      'Camila Cabello',
      'Shown Mendes',
      'Boba',
      'Scarlet Potato',
      'Rick Astley'
    ]
     
    let desc
    let chances = Math.floor(Math.random() * 3) >= 2 ? true : false
    if(chances == true) {
      let amount = Math.floor(Math.random() * (1+1500-400) + 400)
      desc = [
        `"here take ⏣${amount}"`,
        `"aww u poor little beggar, take ⏣${amount}"`,
        `"here take this ⏣${amount}"`,
        `"here take this ⏣${amount} coins"`,
        `you got ⏣${amount} for begging`,
        `Imagine begging and got ⏣${amount}`,
        `Woah u begged and got ⏣${amount}`,
        `You begged at stranger and got ⏣${amount}`,
        `You begged from a begger and got ⏣${amount}`
      ]
    let profile;
    try {
      profile = await eco.findOne({
        userID: message.author.id,
      })
      if(!profile) {
        profile = await eco.create({
          userID: message.author.id,
          coins: 500,
          bank: 0
        })
        profile.save()
      }
    } catch (e) {
      console.error(e)
    }
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
    } else {
      let amount = Math.floor(Math.random() * (1+1500-400) + 400)
      desc = [
        `Imagine begging`,
        `lmao u get nothing.`,
        `ewww imagine begging for coins`,
        `"no."`,
        `You begged and you got nothing!`,
        `you got nothing from begging lol`,
        `go get a life! stop begging`,
        `"ew beggars!! go away!!"`,
        `"here take this ⏣${amount}.. Sike! you get nothing"`,
        `Stop begging!!`,
        `"Get a job and earn your own money"`
      ]
    }

    let embed = new MessageEmbed()
    .setDescription(desc[Math.floor(Math.random() * desc.length)])
    .setColor("GREEN")
    message.channel.send({embeds: [embed]})

}
      }