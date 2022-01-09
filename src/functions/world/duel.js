const { worldDB } = require('./helper/WorldDB');

const duel = async(message, args) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const { getReferences, helperFunctions } = worldDB(guildId, memberId);
  const {playersRef, curPlayerRef, curInventoryRef} = getReferences();
  const { checkRegistered } = helperFunctions();

  const login = await checkRegistered()
  if(!login){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }
  
  message.channel.send("LOL");
}

module.exports = duel;