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
  // World
  "init" : {
    desc    : "Initialize timmy's world",
    how     : "init",
    fun     : functions.init
  },
  "register" : {
    desc    : "Register to play timmy's world",
    how     : "register",
    fun     : functions.register
  },
  "profile" : {
    desc    : "View profile on timmy's world",
    how     : "profile",
    fun     : functions.profile
  },
  "quest" : {
    desc    : "See available quest",
    how     : "quest [take <quest number>]",
    fun     : functions.quest
  }
};

module.exports = timmy;