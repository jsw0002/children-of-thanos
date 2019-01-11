const fs = require('fs');
const path = require('path');
const apiCall = require('./apiCall');

module.exports = () => {
  apiCall('https://api.sleeper.app/v1/league/320982275422429184')
    .then(response => {
      const saveLeagueInfo = {
        scoringSettings: response.data.scoring_settings,
        rosterPositions: response.data.roster_positions,
        name: response.data.name,
        metadata: response.data.metadata,
        avatar: response.data.avatar,
      }

      fs.writeFileSync(path.join(__dirname, '../static/data/leagueInfo.json'), JSON.stringify(saveLeagueInfo));
    });
};
