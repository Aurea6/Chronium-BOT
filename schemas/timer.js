const mongoose = require("mongoose");

let rs = {
  type: String,
  required: true,
};

const timerSchema = mongoose.Schema({
  user: rs,
  guild: rs,
  channel: rs,
  reason: rs,
  duration: {
    type: Number,
    required: true,
  },
  location: rs,
  endsAt: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("timerSchema", timerSchema);