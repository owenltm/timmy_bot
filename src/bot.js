// ENTRY POINT
require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "Timmy ";

const timmy = require('./timmy');

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) => {
  if(message.author.bot) return;
  
  if(message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(" ");

    // console.log(CMD_NAME);
    // console.log(args);

    if(CMD_NAME === "help"){
      
      if(args.length === 0){
        var result = "";
        
        const keys = Object.keys(timmy);

        keys.forEach((keys) => {
          result += `**${keys}** - ${timmy[keys].desc}\n`;
        });

        message.channel.send(result);
      } else if(args.length == 1){
        const key = args[0];
        if(timmy[key]){
          message.channel.send(`${key} - *${timmy[key].howto}*`);
        }
      }

    } else if(CMD_NAME === "goodbye"){
      client.destroy();
    } else if(timmy[CMD_NAME]){
      const cmd = timmy[CMD_NAME];

      cmd.fun(message, args);
    } else {
      message.channel.send("Sorry, i don't know hot to respond to that :(")
    }
  }
});

// Connect to discord
client.login(process.env.DISCORDJS_BOT_TOKEN);