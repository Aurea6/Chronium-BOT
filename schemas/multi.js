const { model, Schema } = require("mongoose");

module.exports = model("multi", new Schema({
  User: String,
  Multi: { type: Number, default: 0 }
})
)