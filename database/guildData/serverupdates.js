const mongoose = require('mongoose');
const guildSchema = new mongoose.Schema({
    GuildID: String,
    ChannelID: String,
})
const guildModel = module.exports = mongoose.model('guildupdates', guildSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */