<template>
<div class="container">
  <div class="row title">
    <div class="col-12 center">
      <h1>{{ $store.state.league.leagueInfo.name }}</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created() {
    // get the league info
    const leagueInfo = this.$axios.get('https://api.sleeper.app/v1/league/320982275422429184');
    leagueInfo.then(result => this.$store.commit('league/setLeagueInfo', result.data));
    // get the league rosters
    const leagueRosters = this.$axios.get('https://api.sleeper.app/v1/league/320982275422429184/rosters');
    leagueRosters.then(result => this.$store.commit('league/setLeagueRosters', result.data));
    // get the league users
    const leagueUsers = this.$axios.get('https://api.sleeper.app/v1/league/320982275422429184/users');
    leagueUsers.then(result => this.$store.commit('league/setLeagueUsers', result.data));
  },
};
</script>

<style>
.center {
  text-align: center;
}
.title {
  margin: 1em 0 1em 0;
}
h1 {
  font-size: 3em;
}
</style>
