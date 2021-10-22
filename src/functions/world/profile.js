const { getReferences } = require('./helper/WorldDB');
const { ref, child, get } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const profile = async(message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const {curPlayerRef} = getReferences(guildId, memberId);

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
  } /* else if (args[0] == 'quest'){
    const questEmbed = new MessageEmbed().setTitle(`${message.member.displayName}'s quest`);

    get(curQuestsRef).then((snapshot) => {
      const quests = snapshot.val()

      for(key in quests){
        const q = quests[key];

        questEmbed.addField(`${q.from}: ${q.goal}`,  `${q.reward} Coins`, false)
      }

      message.channel.send(questEmbed);
    })
  } else if (args[0] == "inventory"){
    const invenEmbed = new MessageEmbed().setTitle(`${message.member.displayName}'s inventory`);

    get(curInventoryRef).then((snapshot) => {
      if(snapshot.exists()){
        const data = snapshot.val();
        const keys = Object.keys(data);

        keys.forEach((key) => {
          invenEmbed.addField(key, data[key], true);
        });
      } else {
        invenEmbed.addField("\u200B", "Inventory is empty");
      }

      message.channel.send(invenEmbed);
    });
  } */

}

module.exports = profile;