const client = require("../../index") 
  
const db = require("quick.db") 

client.on("messageCreate", async (message) => {
    let words = db.fetch(`blacklistedwords_${message.guildId}`)
    if(words === null) {return;}
    else{
        if(message.author.id === client.user.id) return;
    let blockedWords = words.words;
    let msgContent = message.content.toLowerCase();
    if(blockedWords.some(function(v) { return msgContent.indexOf(v) >= 0; })) {
        message.delete();
        message.channel.send({
            embeds: [{
                title: 'Deleted Message',
                description: `❌ <@!${message.author.id}> **your message contained a blacklisted word, hence it has been deleted!**`,
                    color: `#363636`,
                }]
            }).then(m => {
                setTimeout(() => m.delete(), 5000)
            });
        }
    }
    });
