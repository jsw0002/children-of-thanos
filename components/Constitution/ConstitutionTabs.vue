<template>
  <div class="row">
    <b-card no-body>
      <b-tabs pills card vertical>
        <b-tab title="League Overview" active>
          <league-overview></league-overview>
        </b-tab>
        <b-tab title="League Financing">
          <league-financing></league-financing>
        </b-tab>
        <b-tab title="League Setup & Compeition">
        </b-tab>
        <b-tab title="Rosters & Lineups">
        </b-tab>
        <b-tab title="Scoring System">
        </b-tab>
        <b-tab title="Offseason Activities">
        </b-tab>
        <b-tab title="Amendments">
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import LeagueOverview from '~/components/Constitution/LeagueOverview';
import LeagueFinancing from '~/components/Constitution/LeagueFinancing';

export default {
  components: {
    LeagueOverview,
    LeagueFinancing,
  },
};
</script>

<style>

</style>
