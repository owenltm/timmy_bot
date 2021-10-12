const { database } = require("../../firebase/database");
const { getDatabase, ref, set, get } = require ('firebase/database');
const dayjs = require('dayjs')

// const types = ['🤖', '🧟‍♂️', '🧙‍♂️'];

const types = {
  '🤖': "Robot",
  '🧟‍♂️': "Zombie",
  '🧙‍♂️': "Mage"
}

const keys = Object.keys(types);

const register = (message) => {

  const guildId = message.guild.id;
  const memberId = message.member.id

  const guildRef = ref(database, guildId);
  const playerRef = ref(database, guildId + "/players/" + memberId)



  message.reply("Choose your start class").then((msg) => {
    // put reaction option
    keys.forEach((emoji) => msg.react(emoji))

    const filter = (reaction, user) => keys.includes(reaction.emoji.name) && user.id === memberId;
    const collector = msg.createReactionCollector(filter, { time: 15000, max: 1 });
    collector.on('collect', r => {
      // on react
      console.log(`Collected ${r.emoji.name}`);

      // Set starting values
      set(playerRef, {
        id: memberId,
        type: types[r.emoji.name],
        level: 1,
        createdAt: Date.now()
      }).then(() => {
        message.channel.send(`Welcome new player ${r.emoji.name}${message.member.displayName}.Welcome to Timmy's World!`)
      })
    });
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  });
}

const getType = (name) => {
  switch (name) {
    case '🤖':
      return "Robot"
    case '🧟‍♂️':
      return "Zombie"
    case '🧙‍♂️':
      return "Mage"  
    default:
      break;
  }

  return;
}

module.exports = register;