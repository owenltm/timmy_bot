const { worldDB } = require('./helper/WorldDB');
const { get, push, remove, child } = require('firebase/database');

const { MessageEmbed } = require('discord.js');

const questboard = async (message, args) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const {getReferences, helperFunctions} = worldDB(guildId, memberId);
  const { playersRef, questboardRef, curPlayerRef, curQuestsRef } = getReferences();
  const { checkRegistered } = helperFunctions();

  const login = await checkRegistered()
  if(!login){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  if(args[0] == null){
    get(questboardRef).then((snapshot) => {
      const questEmbed = new MessageEmbed()
      .setTitle('List of quest');

      if(snapshot.exists()){
        const val = snapshot.val();

        val.forEach((quest, id) => {
          questEmbed.addField(`${id + 1}. ${quest.from}: ${quest.goal}`, `${quest.reward} Coins`, false);
        });

      } else {
        questEmbed.setDescription('There are no quest at the moment');
      }

      message.channel.send(questEmbed);
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