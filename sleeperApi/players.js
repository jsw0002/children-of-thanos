const axios = require('axios');
const createFile = require('./helper/createFile');

async function getPlayers() {
  const { data: players } = await axios.get('https://api.sleeper.app/v1/players/nfl');

  createFile('2018-players.json', players)
}

getPlayers();
