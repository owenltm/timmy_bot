const { getReferences } = require('./helper/WorldDB');
const { get, query, limitToFirst, limitToLast } = require('firebase/database');

const { MessageEmbed } = require('discord.js');

const questboard = async (message, args) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const { curPlayerRef, curQuestsRef, questboardRef } = getReferences(guildId, memberId);

  const snapshot = await get(curPlayerRef);
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  if(args[0] == null){
    const questEmbed = new MessageEmbed().setTitle(`${message.member.displayName}'s quest`);

    get(curQuestsRef).then((snapshot) => {
      const quests = snapshot.val();
      var id = 1;

      for(key in quests){
        const q = quests[key];

        questEmbed.addField(`${id}. ${q.from}: ${q.goal}`,  `${q.reward} Coins`, false)
      }

      message.channel.send(questEmbed);
    });
  } else if (args[0] == "submit") {
    const questId = args[1] - 1;

    const query1 = query(curQuestsRef, limitToFirst(2));
    const query2 = query(query1, limitToLast(1));

    get(query2).then((snapshot) => {
      const quests = snapshot.val();
      
      console.log(quests);
    });
  }
}

module.exports = questboard