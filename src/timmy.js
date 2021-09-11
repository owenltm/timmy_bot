const functions = require("./functions/index");

const timmy = {
  help : {

  },
  flipacoin : {
    desc    : "Ask timmy to flip a coin",
    howto   : "flipacoin",
    fun     : functions.flipacoin 
  }
};

module.exports = timmy;