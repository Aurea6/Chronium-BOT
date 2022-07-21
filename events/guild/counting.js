const countingSchema = require("../../schemas/counting") 
const client = require("../../index")

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  let counting = await countingSchema.findOne({
    guild: message.guild.id
  })
  if(!counting) return;
  if(message.channel.id == counting.channel) {
    if(isNaN(message.content)) return;
    if(!counting.channel) return;
    let nextNumber = Math.floor(counting.lastNumber + 1)
    if(counting.lastNumber == 0) nextNumber = 1
    if(Number(message.content) !== nextNumber || message.author.id == counting.lastUser) {
      await countingSchema.findOneAndUpdate({
        guild: message.guild.id
      }, {
        lastNumber: 0,
        lastUser: client.user.id
      })
     message.reply(`You messed up! ${message.author.id == counting.lastUser ? "You can't count twice!" : "Start Counting back to 1"}`)
    } else {
      await countingSchema.findOneAndUpdate({
        guild: message.guild.id
      }, {
        lastNumber: nextNumber,
        lastUser: message.author.id
      })
      message.react('✅')
    }
  }
})