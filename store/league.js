export const state = () => ({
  leagueInfo: {},
  leagueRosters: [],
  leagueUsers: [],
});

export const mutations = {
  setLeagueInfo(state, leagueInfo) {
    state.leagueInfo = leagueInfo;
  },
  setLeagueRosters(state, leagueRosters) {
    state.leagueRosters = leagueRosters;
  },
  setLeagueUsers(state, leagueUsers) {
    state.leagueUsers = leagueUsers;
  },
};
