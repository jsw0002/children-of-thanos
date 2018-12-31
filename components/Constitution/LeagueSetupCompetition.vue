<template>
  <div class="row">
    <sub-section>
      The Children of Thanos will consist of 10 different teams, broken into two conferences of five teams each.
      The schedule will be randomly generated, with each team playing every other team at least once in head-to-head match-up.
      Teams will also play their division opponents an additional time.
      Since the regular season lasts 14 weeks and this only accounts for 13 the remaining game will be randomly assigned every season.
    </sub-section>

    <sub-section title="Playoffs">
      After the completion of the regular season, the top four teams will make the playoffs.
      Division winners will be ranked according to record with tie breakers going to total points then division record.
      The remaining two teams will be ranked using the same method.
      In Week 15, the 1 seed will play the 4 seed and the 2 seed will play the 3 seed.
      The winners from Week 15 will play in the championship during Week 16 of the NFL.
    </sub-section>
  </div>
</template>

<script>
import SubSection from '~/components/SubSection';

export default {
  components: {
    SubSection,
  },
};
</script>

<style>

</style>
