const axios = require('axios');
const createFile = require('./helper/createFile');

module.exports = () => {
  axios.get('https://api.sleeper.app/v1/league/320982275422429184/users')
    .then(response => {
      const saveLeagueUsers = {
        users: response.data,
      }

      createFile('leagueUsers.json', saveLeagueUsers);
    });
};
