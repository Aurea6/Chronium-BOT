const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    Role: {
       type: String,
       unique: true,
       required: true,
     },
    GuildID: {
       type: String,
       unique: true,
       required: true,
     },
});

const roleModel = module.exports = mongoose.model("autorole", roleSchema)
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */