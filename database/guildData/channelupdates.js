const mongoose = require('mongoose');
const channelSchema = new mongoose.Schema({
    ChannelID: String,
    GuildID: String
})
const channelModel = module.exports = mongoose.model('channelupdates', channelSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */