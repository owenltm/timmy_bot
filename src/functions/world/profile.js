const { getReferences } = require('./helper/WorldDB');
const { ref, child, get } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const profile = async(message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const {curPlayerRef} = getReferences(guildId, memberId);

  // const playersRef = ref(database, guildId + "/players/");
  // const questsRef = ref(database, guildId + "/quests/");

  // const memberRef = child(playersRef,  memberId);

  const snapshot = await get(curPlayerRef);
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  if(args[0] == null){
    const player = snapshot.val();
    const stats = player.stat;

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
  } else if (args[0] == 'quest'){

  } else if (args[0] == "inventory"){

  }

}

module.exports = profile;