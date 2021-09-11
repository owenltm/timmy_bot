// ENTRY POINT
require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "Timmy ";

const timmy = require('./timmy.js');

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) => {
  if(message.author.bot) return;
  
  if(message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(" ");

    /* console.log(CMD_NAME);
    console.log(args); */

    if(CMD_NAME == "flipacoin"){

      timmy.flipacoin.fun(message);

      /* const random = (Math.random() * 10) % 2;

      const result = random == 0 ? "head" : "tails";

      message.channel.send(`${message.member} ${result}`); */
    }
  }
});

// Connect to discord
client.login(process.env.DISCORDJS_BOT_TOKEN);