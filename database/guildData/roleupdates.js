const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
    GuildID: String,
    ChannelID: String,
})
const roleModel = module.exports = mongoose.model('roleupdates', roleSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */