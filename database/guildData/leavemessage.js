const mongoose = require('mongoose');

const LeaveMsgSchema = new mongoose.Schema({
  ByeMsg: {
    type: String
  },
  GuildID: String
});

const ByeModel = module.exports = mongoose.model('leavemsg', LeaveMsgSchema);
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */