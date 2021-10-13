const { database } = require("../../firebase/database");
const { ref, set, get, push, remove, child } = require ('firebase/database');

const { MessageEmbed } = require('discord.js');

const profile = (message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const playersRef = ref(database, guildId + "/players/");
  const questsRef = ref(database, guildId + "/quests/");

  get(child(playersRef, memberId + "")).then((snapshot) => {
    if(snapshot.exists()){
      console.log("Exists")
    } else {
      message.reply("You are not registered\nyou can register using `T-register`");
    }
  });
}

module.exports = profile;