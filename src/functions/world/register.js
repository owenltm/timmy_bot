const { getReferences } = require('./helper/WorldDB');
const { ref, set, get } = require ('firebase/database');

const types = {
  '🤖': {
    name: "Robot",
    stat: {
      att: 8,   //attack point
      def: 7,   //defence point
      spec: 3   //special bonus point
    }
  },
  '👻': {
    name: "Ghost",
    stat: {
      att: 6,
      def: 4,
      spec: 8
    }
  },
  '🥷': {
    name: "Ninja",
    stat: {
      att: 7,
      def: 5,
      spec: 6
    }
  },
  '🧙‍♂️': {
    name: "Mage",
    stat: {
      att: 4,
      def: 8,
      spec: 6
    }
  }
}

const keys = Object.keys(types);

const register = (message) => {

  const guildId = message.guild.id;
  const memberId = message.member.id;

  const { curPlayerRef } = getReferences(guildId, memberId);

  message.reply("Choose your start class").then((msg) => {
    // put reaction option
    keys.forEach((emoji) => msg.react(emoji))

    const filter = (reaction, user) => keys.includes(reaction.emoji.name) && user.id === memberId;
    const collector = msg.createReactionCollector(filter, { time: 15000, max: 1 });
    collector.on('collect', r => {
      // on react
      console.log(`Collected ${r.emoji.name}`);

      // Set starting values
      set(curPlayerRef, {
        id: memberId,
        type: types[r.emoji.name].name,
        level: 1,
        coin: 75,
        createdAt: Date.now(),
        stat: types[r.emoji.name].stat,
      }).then(() => {
        message.channel.send(`Welcome new player ${r.emoji.name}${message.member.displayName}.Welcome to Timmy's World!`)
      }).catch(err => {
        console.error(err)
      })
    });
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  });
}

module.exports = register;