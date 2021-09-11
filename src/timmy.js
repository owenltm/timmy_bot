const functions = require("./functions/index");

const timmy = {
  introduce: {
    desc    : "Ask timmy to introduce himself",
    howto   : "introduce",
    fun     : functions.introduce
  },
  help : {
    desc    : "Ask timmy how to do stuff",
    howto   : "help [command]",
    fun     : functions.help 
  },
  flipacoin : {
    desc    : "Ask timmy to flip a coin",
    howto   : "flipacoin",
    fun     : functions.flipacoin 
  }
};

module.exports = timmy;