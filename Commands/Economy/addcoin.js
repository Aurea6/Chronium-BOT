const eco = require('../../schemas/economy')

module.exports = {
    name: 'setcoin',
    aliases: ['addcoin', "addcoins", " addc"],
  timeleft: 100,
   run: async (client,message, args)=>{
        const allowed = ['742335160598659094']

        if(!allowed.includes(message.author.id)) return

        const target = message.mentions.users.first() || null
        if(!target) return message.channel.send(`Please @ the user.`)

        args.shift()
        const amount = parseInt(args[0]) || null
        if(!amount || isNaN(amount)) return message.channel.send("Enter a valid amount.")
        
        let user = await eco.findOne({ userID: target.id })
        await eco.findOneAndUpdate({
                userID: target.id,
              },
              {
                $inc: {
                  coins: amount,
                },
              })
            user.save()
            return message.channel.send(`Done! Successfully added ${amount} to ${target} bal`)
        
        user.coins = amount
        user.save()
        message.channel.send(`Done! Successfully added ${amount} to ${target} bal`)

    }
}