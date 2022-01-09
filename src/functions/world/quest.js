const { worldDB } = require('./helper/WorldDB');
const { get, set, remove, child, increment } = require('firebase/database');

const { MessageEmbed } = require('discord.js');

const questboard = async (message, args) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const { getReferences, helperFunctions } = worldDB(guildId, memberId);
  const { curPlayerRef, curQuestsRef, curInventoryRef } = getReferences();
  const { checkRegistered } = helperFunctions();

  const login = await checkRegistered()
  if(!login){
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

    get(curQuestsRef).then((snapshot) => {
      const quests = snapshot.val();
      const questKeys = Object.keys(quests);
      const key = questKeys[questId]; //get quest key

      const curQuest = quests[key];
      const objective = curQuest.objective;

      const objKey = Object.keys(objective); //get objective items

      get(curInventoryRef).then((snapshot) => {
        const inventory = snapshot.val();
        var valid = true;

        objKey.forEach(key => {
          //compare objective items in inventory
          valid = inventory[key] >= objective[key];
        });

        // console.log(valid);
        if(valid){
          objKey.forEach(key => {
            set(child(curInventoryRef, key), increment(0 - objective[key]));
          });

          set(child(curPlayerRef, "coin"), increment(curQuest.reward));
          remove(child(curQuestsRef, key))
        } else {
          message.reply("You haven't complete the quest yet");
        }
      });
    });
  }
}

module.exports = questboard