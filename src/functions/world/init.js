const { database } = require("../../firebase/database");
const { ref, set, get, push } = require ('firebase/database');
// const {job} = require("./scheduler");

const init = (message) => {
  const guildId = message.guild.id;

  const guildRef = ref(database, guildId)
  const questsRef = ref(database, guildId + "/quests/")

  // TODO: Create function to generate quests every N time
  const quests = [
    {
      from: "Fisherman",
      goal: "Catch 5 fish",
      reward: 5,
      objective: {
        "Fish": 5,
      }
    },
    {
      from: "Fisherman",
      goal: "Catch 5 fish",
      reward: 5,
      objective: {
        "Fish": 5,
      }
    }
  ];

  set(questsRef, quests).then(() => {
    message.channel.send("Updated");
  })

}

module.exports = init