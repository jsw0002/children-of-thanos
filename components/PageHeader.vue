<template>
  <div class="row header">
    <div class="col-12">
      <h1>{{ leagueName }}</h1>
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
