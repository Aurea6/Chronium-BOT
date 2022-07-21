const Discord = require('discord.js')

let { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js")

const Color = `#ffcc00`

let number = require("../../function/numbers")
let emo = require("../../emojis")
let jobList = require('../../economy/pet')
let work = require('../../schemas/pet')
const eco = require('../../schemas/economy');

module.exports = {
    name: 'adopt',
    
    aliases: ['adoptpet'],
    
    cooldownMsg: {title: "Slow Down!", description: "> You can use this command every **${timecommand}**!\n> Try again in: **${timeleft}**", color: "RED"},
    run : async (client, message, args) => {

    let job;
    try {
      job = await work.findOne({
        User: message.author.id
      })
    } catch (e) {
      console.error(e)
    }


    let gotJob = async(findJob) => {
      await work.create({
            User: message.author.id,
            Pet: findJob.name,
            
          })
      message.channel.send(`Aww! U adopted a cute ${findJob.name} pet `)
    }

      
     
          if(job) return message.channel.send(`You already have a pet! How dare u get a new pet :(`)
          if(Math.floor(Math.random() * 100) !== 1) {
            let findJob = jobList.find(value => value.id == args[0])
            if(!findJob || !args[0] ) {
              let sentMsg = await message.channel.send(`${args[0] ? `Can't find a pet with id of \`${args[0]}\`` : `You didnt specify a pet id!`}\n**Please type a job id in the chat! Type \`cancel\` to cancel the cmd**`)

              let msgCollector = message.channel.createMessageCollector({
                time: 120000
              })

              msgCollector.on('collect', async m => {
                if(m.author.id !== message.author.id) return;
                if(m.content == 'cancel') return msgCollector.stop('cancel')
                let findJob = jobList.find(value => value.id == m.content)
                if(findJob) {
                  msgCollector.stop(`${findJob.id}`)
                } else {
                  return message.channel.send(`Can't find a pet with that name! **type it again** or type \`cancel\` to cancel`)
                }
              })

              msgCollector.on('end', async(collected, reason) => {
                if(reason == 'time') {
                  message.channel.send(`You took too long to respond! Come back later to adopt a cute pet`)
                } else {
                  if(reason !== 'cancel') {
                  let findJob = jobList.find(value => value.id == reason)
                  return gotJob(findJob)
                  } else {
                    message.channel.send(`Cancelled!`)
                  }
                }
              })
            } else {
              return gotJob(findJob)
            }
          } else {
            message.channel.send(`You adopted a cute pet but it ran away with a new owner! What a noob`)
          }

}
}