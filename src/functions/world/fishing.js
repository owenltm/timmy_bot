const { getReferences } = require('./helper/WorldDB');
const { ref, set, get, push, remove, child, increment } = require ('firebase/database');

const fishing = async(message) => {
  const guildId = message.guild.id;
  const memberId = message.member.id;

  const {playersRef, curPlayerRef, curInventoryRef} = getReferences(guildId, memberId);

  const snapshot = await get(child(playersRef, memberId + ""))
  if(!snapshot.exists()){
    message.reply("You are not registered\nyou can register using `T-register`");
    return;
  }

  message.reply("Casting line..., be ready for the fish").then((msg) => {

    const delay = Math.floor(Math.random() * 30000) + 1000;

    // add react after delay
    setTimeout(function() {
      msg.react('🐟');

      const filter = (reaction, user) => reaction.emoji.name === '🐟' && user.id === memberId;
      const collector = msg.createReactionCollector(filter, { time: 1800, max: 1 });

      collector.on('collect', r => {
        // on react
        // console.log(`Collected ${r.emoji.name}`);

        const n = Math.floor(Math.random() * 2) + 1;
        message.channel.send(`Hoorayyy! got ${n} fish 🐟`);
        set(child(curInventoryRef, "fish"), increment(n))
      });
      
      collector.on('end', collected => {
        // console.log(`Collected ${collected.size} items`);
        if(collected.size == 0) {
          message.channel.send("The fish got away")
        }
      });
    }, delay);
  })
}

module.exports = fishing;