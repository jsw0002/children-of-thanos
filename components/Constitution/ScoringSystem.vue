<template>
  <div class="row right-padding">
    <sub-section title="Scoring System">
      Scoring in Children of Thanos will be computed to two decimal places.
      This will allow points to be awarded or deducted for every positive or negative yard and will dramatically reduce the chance of a tie game.
      Players are awarded fantasy points for each week that they are included in the team's starting lineup.
      Players may only start at one position in any given week and will only be awarded points as described by their position distinction below.
    </sub-section>

    <div class="row">
      <div class="col">
        <sub-section>
          QB / RB / WR / TE Scoring
        </sub-section>

        <ul>
          <li>0.5 points for each reception</li>
          <li>0.1 points for every rushing/receiving yard</li>
          <li>0.04 points for every passing yard</li>
          <li>6.0 points for each touchdown scored (rushing, receiving, fumble recovery, or kick return)</li>
          <li>4.0 points for each passing touchdown scored</li>
          <li>2.0 points for every 2-point conversion run, reception, or pass</li>
          <li>-1.0 point for every interception thrown</li>
          <li>-1.0 point for every fumble that is recovered by their own team</li>
          <li>-2.0 points for every fumble that is recovered by the other team (lost)</li>
          <li>2.0 points bonus for a player totaling 100-199 rushing/receiving yards**</li>
          <li>2.0 points bonus for a player totaling 300-399 passing yards**</li>
          <li>4.0 points bonus for a player totaling 200 or more rushing/receiving yards**</li>
          <li>4.0 points bonus for a player totaling 400 or more passing yards*</li>
        </ul>
      </div>
    </div>

    <sub-section>
      <span class="italic">** If a player reaches the bonus in multiple categories they will receive the bonus for each</span>
    </sub-section>

    <div class="row">
      <div class="col">
        <sub-section>
          Defense Scoring
        </sub-section>

        <ul>
          <li>6.0 points for allowing 0 points</li>
          <li>4.0 points for allowing 1-6 points</li>
          <li>3.0 points for allowing 7-13 points</li>
          <li>2.0 points for allowing 14-20 points</li>
          <li>1.0 point for allowing 21-27 points</li>
          <li>0.0 points for allowing 28 or more points</li>
          <li>1.0 point for every sack</li>
          <li>2.0 points for every interception or fumble recovery</li>
          <li>6.0 points for a defensive touchdown</li>
          <li>2.0 points for every safety</li>
          <li>1.0 point for every forced fumble</li>
          <li>3.0 points for each blocked kick</li>
        </ul>
      </div>
    </div>

    <sub-sub-section title="Point Totals and Final Scores">
      Children of Thanos will be hosted on <a href="https://sleeper.app">sleeper.app</a>.
      Head to head scoring will be determined each week by the stats from that website.
      From time to time, the NFL may go back and change the scoring of certain plays later in the week.
      <a href="https://sleeper.app">sleeper.app</a> gives the commissioner the option to make these scores retroactive.
      However, to maintain a sense of fairness and avoid confusion in the league, all head-to-head scoring will be resolved as of Tuesday at noon Eastern.
      Any scoring changes that come out from the NFL after that time will not be applied to the league.
    </sub-sub-section>
  </div>
</template>

<script>
import SubSection from '~/components/SubSection';
import SubSubSection from '~/components/SubSubSection';

export default {
  components: {
    SubSection,
    SubSubSection,
  },
};
</script>

<style>

</style>
