  
const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
  Welcome: {
    type: String,
  },
  GuildID: String
});

const MessageModel = module.exports = mongoose.model('welcomer', welcomeSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */