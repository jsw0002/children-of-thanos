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
          <league-setup-competition></league-setup-competition>
        </b-tab>
        <b-tab title="Rosters & Lineups">
          <rosters-and-lineups></rosters-and-lineups>
        </b-tab>
        <b-tab title="Scoring System">
          <scoring-system></scoring-system>
        </b-tab>
        <b-tab title="Offseason Activities">
          <offseason-activities></offseason-activities>
        </b-tab>
        <b-tab title="Amendments">
          <amendments></amendments>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import LeagueOverview from '~/components/Constitution/LeagueOverview';
import LeagueFinancing from '~/components/Constitution/LeagueFinancing';
import LeagueSetupCompetition from '~/components/Constitution/LeagueSetupCompetition';
import RostersAndLineups from '~/components/Constitution/RostersAndLineups';
import ScoringSystem from '~/components/Constitution/ScoringSystem';
import OffseasonActivities from '~/components/Constitution/OffseasonActivities';
import Amendments from '~/components/Constitution/Amendments';

export default {
  components: {
    LeagueOverview,
    LeagueFinancing,
    LeagueSetupCompetition,
    RostersAndLineups,
    ScoringSystem,
    OffseasonActivities,
    Amendments,
  },
};
</script>

<style>

</style>
