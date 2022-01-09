const { worldDB } = require('./helper/WorldDB');
const { ref, child, get } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const profile = async(message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  // const {curPlayerRef} = getReferences(guildId, memberId);
  const {getReferences, helperFunctions} = worldDB(guildId, memberId);
  const { curPlayerRef } = getReferences();
  const { checkRegistered } = helperFunctions();

  const login = await checkRegistered()
  if(!login){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  const snapshot = await get(curPlayerRef);
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
}

module.exports = profile;