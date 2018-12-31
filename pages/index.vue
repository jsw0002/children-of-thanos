<template>
  <section>
    <page-header></page-header>
  </section>
</template>

<script>
import PageHeader from '~/components/PageHeader';


export default {
  components: {
    PageHeader,
  },
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

</style>
