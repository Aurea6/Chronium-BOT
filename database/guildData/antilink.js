const mongoose = require('mongoose')

const antilinkSchema = new mongoose.Schema({
    GuildID: String,
});

const antilinkModel = module.exports = new mongoose.model('antilink', antilinkSchema)
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */