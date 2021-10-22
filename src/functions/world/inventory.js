const { getReferences } = require('./helper/WorldDB');
const { get, } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const inventory = async (message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const {curPlayerRef, curInventoryRef} = getReferences(guildId, memberId);

  const snapshot = await get(curPlayerRef);
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

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
  })

}

module.exports = inventory;