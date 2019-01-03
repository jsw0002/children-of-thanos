<template>
  <div class="row title">
    <div class="col-12">
      <h1 style="text-align:center;">{{ $store.state.league.leagueInfo.name || 'Children of Thanos Default' }}</h1>
    </div>

    <div class="league-avatar">
      <img src="https://sleepercdn.com/avatars/2f8d4f95d8c18eddbe49707fb6d3a86b" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // url: `https://sleepercdn.com/avatars/${this.$store.state.league.leagueInfo.avatar}`,
    };
  },
}
</script>

<style>
  .league-avatar {
    height: 240px;
    width: 240px;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .league-avatar img {
    width: 100%;
  }
</style>
