const { app } = require("../../../firebase/config");
const { getDatabase, ref, set, get } = require ('firebase/database');

const database = getDatabase(app);

const getReferences = (guildId, memberId) => {
  const playersRef = ref(database, guildId + "/players/");
  const inventoriesRef = ref(database, guildId + "/inventory/");
  const questboardRef = ref(database, guildId + "/questboard/");
  
  const curPlayerRef = ref(database, guildId + "/players/" + memberId);
  const curInventoryRef = ref(database, guildId + "/inventory/" + memberId)
  const curQuestsRef = ref(database, guildId + "/quests/" + memberId);

  return {
    playersRef,
    inventoriesRef,
    questboardRef,
    curPlayerRef,
    curInventoryRef,
    curQuestsRef,
  }
}

const helperFunctions = (guildId, memberId) => {
  const checkRegistered = async() => {
  }
}

module.exports = {
  getReferences
}