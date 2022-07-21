const mongoose = require("mongoose")

const customCommand = mongoose.Schema({
  authorId: {
    type: String,
    required: true
  },
  commandName: {
    type: String,
    required: true
  },
  commandResponse: {
    type: String,
    required: true
  },
  guildID: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("customCmd", customCommand)