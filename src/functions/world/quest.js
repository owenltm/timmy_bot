const { database } = require("../../firebase/database");
const { ref, set, get, push, remove, child } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const quest = (message, args) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const playersRef = ref(database, guildId + "/players/");
  const questsRef = ref(database, guildId + "/quests/");

  const memberRef = child(playersRef, memberId + "");

  // TODO: Player Validation

  if(args[0] == null){
    get(questsRef).then((snapshot) => {
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
    const questRef = child(questsRef, `${questId}/`);

    get(questRef).then((snapshot) => {
      const quest = snapshot.val();

      console.log(quest);

      // add quest to member
      push(child(memberRef, "quest"), quest).then(() => remove(questRef));
    });
  }
}

module.exports = quest