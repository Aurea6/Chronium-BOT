const mongoose = require("mongoose")

const prefixSchema = new mongoose.Schema({
Prefix: String,
GuildID: String,
});

const prefixModel = module.exports = mongoose.model("prefix", prefixSchema)
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */