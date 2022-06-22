const mongoose = require('mongoose');
const voiceSchema = new mongoose.Schema({
    GuildID: String,
    ChannelID: String,
})
const voiceModel = module.exports = mongoose.model('voiceupdates', voiceSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */