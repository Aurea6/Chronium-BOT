const { model, Schema } = require("mongoose");

module.exports = model("pets", new Schema({
  User: String,
  Pet: Object,
})
)