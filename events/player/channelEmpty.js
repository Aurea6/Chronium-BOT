module.exports = async(queue, client) => {

    const playingMessage = queue.metadata.guild.channels.cache.get(client.db.get(`playingchannel_${queue.metadata.guild.id}`)).messages.cache.get(client.db.get(`playingembed_${queue.metadata.guild.id}`), false, true);

    if (playingMessage && !playingMessage.deleted && playingMessage.deletable) {
      playingMessage.delete().catch(console.error);
    }
  
    return client.say.queueMessage(client, queue, "I have left the voice channel as I was left alone.");
    
  };
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */