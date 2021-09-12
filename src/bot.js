// ENTRY POINT
require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "Timmy ";

const timmy = require('./timmy');

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);

  client.user.setActivity('Timmy', { type: 'LISTENING' })
  .catch(console.error);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === "Timmy"){
    message.channel.send("Ask *Timmy whatcanyoudo* *wink *wink");
  }
  
  if(message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content.trim().substring(PREFIX.length).split(" ");

    // console.log(CMD_NAME);
    // console.log(args);

    if(CMD_NAME === "whatcanyoudo"){
      
      var result = "";
      
      const keys = Object.keys(timmy);

      keys.forEach((keys) => {
        result += `**${keys}** - ${timmy[keys].desc}\n`;
      });

      message.channel.send(result);
    } else if(CMD_NAME === "howto"){
      if(args.length == 1){
        const key = args[0];
        if(timmy[key]){
          message.channel.send(`${key} - do *${timmy[key].how}*`);
        } else {
          message.channel.send("Sorry, i dont know how to do that :(");
        }
      }
    } else if(CMD_NAME === "goodbye"){

      console.log("Goodbye");

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