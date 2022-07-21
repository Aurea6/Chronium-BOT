const mongoose = require("mongoose")

const countingSchema = mongoose.Schema({
  lastUser: {
    type: String,
    required: true
  },
  lastNumber: {
    type: Number,
    default: 0
  },
  channel: {
    type: String,
    required: true
  },
  guild: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("countingSchema", countingSchema)