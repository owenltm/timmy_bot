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
  "diceroll" : {
    desc    : "Ask timmy to roll dice(s)",
    how     : "diceroll [dice number]",
    fun     : functions.diceroll 
  },
  //music
  "play" : {
    desc    : "Flip Flop",
    how     : "play [url]",
    fun     : functions.play
  },
  // World
  "init" : {
    desc    : "Initialize timmy's world",
    how     : "init",
    fun     : functions.init
  },
  "register" : {
    desc    : "Register to play in timmy's world",
    how     : "register",
    fun     : functions.register
  },
  "profile" : {
    desc    : "View profile on timmy's world",
    how     : "profile [quest|inventory]",
    fun     : functions.profile
  },
  "inventory" : {
    desc    : "View inventory on timmy's world",
    how     : "inventory",
    fun     : functions.inventory
  },
  "quest" : {
    desc    : "View currently going quest",
    how     : "quest [take <quest number>]",
    fun     : functions.quest
  },
  "questboard" : {
    desc    : "See available quest",
    how     : "questboard [take <quest number>]",
    fun     : functions.questboard
  },
  "fishing" : {
    desc    : "Go fishing",
    how     : "fishing",
    fun     : functions.fishing
  },
  "duel" : {
    desc    : "Ask other player for a duel",
    how     : "duel [challenge <player name> <bet> | accept]",
    fun     : functions.duel
  }
};

module.exports = timmy;