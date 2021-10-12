const app = require('./config');
const { getDatabase, ref, set, get } = require ('firebase/database');

const database = getDatabase(app);

const getReference = (path) => {
  return ref(database, path);
}

module.exports = {
  database,
  set,
  get
}