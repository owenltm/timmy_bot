const functions = require("./functions/index");

const timmy = {
  "introduce" : {
    desc    : "Let timmy to introduce himself",
    how     : "Timmy introduce",
    fun     : functions.introduce
  },
  "howto" : {
    desc    : "Ask Timmy how to do anything",
    how     : "Timmy howto [command]",
  },
  "flipacoin" : {
    desc    : "Ask timmy to flip a coin",
    how     : "Timmy flipacoin",
    fun     : functions.flipacoin 
  }
};

module.exports = timmy;