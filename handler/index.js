const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);
const mainjson = require("../botconfig/main.json");
const chalk = require("chalk");
const { mongooseConnectionString } = require("../botconfig/main.json");
const mongoose = require("mongoose") 
module.exports = async (client) => {
//mongoose
if (!mongooseConnectionString) return;

    mongoose
    .connect(mongooseConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
      
    })
      .then(
      console.log(
        chalk.bgGreenBright.black(
          `connected to Mongo DB `
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          `could not connect to mongo DB `
        )
      )
    );
  
};
