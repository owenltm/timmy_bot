const app = require('./config');
const { getDatabase, ref, set, get } = require ('firebase/database');

const database = getDatabase(app);

const getReference = (path) => {
  return ref(database, path);
}

const setData = (ref, data) => {
  return set(ref, data)
};

const getData = () => {
  
}

module.exports = {
  database,
  setData,
  getData
}