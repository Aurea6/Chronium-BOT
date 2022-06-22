module.exports = async(queue, error, client) => {

    client.say.queueMessage(client, queue, "An error occurred while playing. Sorry for the inconveniences.", "RED");

    return client.utils.sendErrorLog(client, { stack: `${error.message}`, name: "PLAYER_CONNECTION_ERROR", code: `${queue.id}` }, "error");
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