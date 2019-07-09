const axios = require('axios')
const createFile = require('./helper/createFile')

module.exports = () => {
  axios.get('https://api.sleeper.app/v1/league/320982275422429184')
    .then((response) => {
      const saveLeagueInfo = {
        scoringSettings: response.data.scoring_settings,
        rosterPositions: response.data.roster_positions,
        name: response.data.name,
        metadata: response.data.metadata,
        avatar: response.data.avatar
      }

      createFile('leagueInfo.json', saveLeagueInfo)
    })
}
