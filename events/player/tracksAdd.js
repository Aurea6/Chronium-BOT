module.exports = async(queue, tracks, client) => {

    queue.metadata.editReply(`Tracks Enqueued ${tracks.length}\nSource: ${tracks.source}`).then(async(msg)=>{
        setTimeout(function(){
            msg.delete();
        }, 10000);
    })

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