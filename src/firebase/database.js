const app = require('./config');
const { getDatabase, ref, set } = require ('firebase/database');

const database = getDatabase(app);

const testRef = ref(database, 'test');

const testDB = (str) => {
  set(testRef, {
    value: str
  });
}

module.exports = {
  database,
  testDB
}