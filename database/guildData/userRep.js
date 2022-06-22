const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
	GuildID: String,
	UserID: String,
	GeneralRep: Number,
	TradeRep: Number,
})

const userRepModel = module.exports = mongoose.model("userRep", userSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */