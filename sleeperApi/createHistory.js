const leagueRosters = require('../static/data/leagueRosters.json')
const leagueUsers = require('../static/data/leagueUsers.json')
const createFile = require('./helper/createFile')

const history = []

leagueRosters.rosters.forEach((roster) => {
  leagueUsers.users.forEach((user) => {
    if (user.user_id === roster.owner_id) {
      history.push({
        userId: user.user_id,
        displayName: user.display_name,
        teamName: (user.metadata.team_name) ? user.metadata.team_name : '',
        avatar: user.avatar,
        regularWins: roster.settings.wins,
        regularLoses: roster.settings.losses,
        regularPS: roster.settings.fpts,
        regularPA: roster.settings.fpts_against,
        postWins: 0,
        postLoses: 0,
        postPS: 0,
        postPA: 0
      })
    }
  })
})

createFile('history-2018.json', history)
