const functions = require("./functions/index");

const timmy = {
  "introduce" : {
    desc    : "Let timmy to introduce himself",
    howto   : "Timmy introduce",
    fun     : functions.introduce
  },
  "help" : {
    desc    : "Ask Timmy how to play",
    howto   : "Timmy help [command]",
    fun     : functions.help
  },
  "flipacoin" : {
    desc    : "Ask timmy to flip a coin",
    howto   : "Timmy flipacoin",
    fun     : functions.flipacoin 
  }
};

module.exports = timmy;