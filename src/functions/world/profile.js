const { database } = require("../../firebase/database");
const { ref, set, get, push, remove, child } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const profile = (message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const playersRef = ref(database, guildId + "/players/");
  const questsRef = ref(database, guildId + "/quests/");

  if(args[0] == null){
    get(child(playersRef, memberId + "")).then((snapshot) => {
      if(snapshot.exists()){
        const player = snapshot.val();
        const stats = player.stat;
        const quests = player.quest;
  
        console.log(quests);

        const profileEmbed = new MessageEmbed().setTitle("Profile")
          .addField('Name', message.member.displayName, false)
          .addFields(
            {name: "Level", value: player.level, inline: true},
            {name: "Coin", value: '🪙 ' + player.coin, inline: true},
            {name: "\u200B", value: '\u200B', inline: true},    //Placeholder for 3 column
          )
          .addFields(
            {name: "Attack", value: stats.att, inline: true},
            {name: "Defense", value: stats.def, inline: true},
            {name: "Special", value: stats.spec, inline: true},
          );          
  
        message.channel.send(profileEmbed);
  
      } else {
        message.reply("You are not registered\nyou can register using `T-register`");
      }
    });
  } else if (args[0] == 'quest'){

  }

}

module.exports = profile;