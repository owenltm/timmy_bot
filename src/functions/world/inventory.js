const { database } = require("../../firebase/database");
const { ref, set, get, push, remove, child, increment } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const inventory = async (message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const playerRef = ref(database, guildId + "/players/" + memberId);
  const invenRef = child(playerRef, "inventory");

  const snapshot = await get(playerRef);
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  const invenEmbed = new MessageEmbed().setTitle("Inventory");

  get(invenRef).then((snapshot) => {
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