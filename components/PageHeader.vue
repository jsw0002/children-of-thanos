<template>
  <div class="row title">
    <div class="col-12">
      <h1 class="center">{{ leagueName }}</h1>
    </div>

    <div class="league-avatar">
      <img :src="url" />
    </div>
  </div>
</template>

<script>
const leagueInfo = require('../static/data/leagueInfo.json');

export default {
  data() {
    return {
      leagueName: leagueInfo.name,
      url: `https://sleepercdn.com/avatars/${leagueInfo.avatar}`,
    };
  },
}
</script>

<style>

</style>
