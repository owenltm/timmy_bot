const functions = require("./functions/index");
const { SlashCommandBuilder } = require('discord.js');
const { execute } = require("./functions/ping");

const timmy = {
  "introduce" : {
    data: new SlashCommandBuilder()
        .setName('introduce')
        .setDescription('Introduce Timmy to the server'),
    type: "LIVE",
    fun: functions.introduce
  },
  "diceroll" : {
    data: new SlashCommandBuilder()
        .setName('diceroll')
        .setDescription('Ask timmy to roll dice(s)'),
    type: "LIVE",
    fun: functions.diceroll
  }
};

module.exports = timmy;