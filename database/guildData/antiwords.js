const mongoose = require("mongoose");

const antiwordsSchema = new mongoose.Schema({
    GuildID: String,
});

const model = mongoose.model('antiwords', antiwordsSchema);

module.exports = model;
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */