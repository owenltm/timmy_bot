const functions = require("./functions/index");

const timmy = {
  "introduce" : {
    desc    : "Let timmy to introduce himself",
    howto   : "introduce",
    fun     : functions.introduce
  },
  "help" : {
    desc    : "Ask Timmy how to play",
    howto   : "help [command]",
    fun     : functions.help
  },
  "flipacoin" : {
    desc    : "Ask timmy to flip a coin",
    howto   : "flipacoin",
    fun     : functions.flipacoin 
  }
};

module.exports = timmy;