const fs = require('fs');
const path = require('path');
const apiCall = require('./apiCall');

module.exports = () => {
  apiCall('https://api.sleeper.app/v1/league/320982275422429184/rosters')
    .then(response => {
      const saveLeagueRosters = {
        rosters: response.data,
      }

      fs.writeFileSync(path.join(__dirname, '../static/data/leagueRosters.json'), JSON.stringify(saveLeagueRosters));
    });
};
