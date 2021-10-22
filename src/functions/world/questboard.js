const { getReferences } = require('./helper/WorldDB');
const { get, push, remove, child } = require('firebase/database');

const { MessageEmbed } = require('discord.js');

const questboard = async (message, args) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const { playersRef, questboardRef, curPlayerRef, curQuestsRef } = getReferences(guildId, memberId);

  const snapshot = await get(child(playersRef, memberId + ""))
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  if(args[0] == null){
    get(questboardRef).then((snapshot) => {
      if(snapshot.exists){
        const val = snapshot.val();
        
        const questEmbed = new MessageEmbed()
        .setTitle('List of quest');

        val.forEach((quest, id) => {
          questEmbed.addField(`${id + 1}. ${quest.from}: ${quest.goal}`, `${quest.reward} Coins`, false);
        });

        message.channel.send(questEmbed);
      }
    }).catch((err) => console.error(err))
  } else if (args[0] == "take") {
    const questId = args[1] - 1;
    const questRef = child(questboardRef, "" + questId);

    get(questRef).then((snapshot) => {
      const quest = snapshot.val();

      // add quest to member
      push(curQuestsRef, quest).then(() => remove(questRef));
    });
  }
}

module.exports = questboard