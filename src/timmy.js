const functions = require("./functions/index");

const timmy = {
  "introduce" : {
    desc    : "Let timmy to introduce himself",
    how     : "introduce",
    fun     : functions.introduce
  },
  "howto" : {
    desc    : "Ask Timmy how to do anything",
    how     : "howto [command]",
  },
  "flipacoin" : {
    desc    : "Ask timmy to flip a coin",
    how     : "flipacoin",
    fun     : functions.flipacoin 
  },
  "rockpaperscissors" : {
    desc    : "Play rock paper scissors with Timmy",
    how     : "rockpaperscissors [rock/paper/scissors]",
    fun     : functions.rockpaperscissors 
  },
  "init" : {
    desc    : "Initialize timmy's world",
    how     : "init",
    fun     : functions.init
  }
};

module.exports = timmy;