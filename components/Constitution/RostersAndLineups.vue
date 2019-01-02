<template>
  <div class="row right-padding">
    <sub-section>
      Rosters in Children of Thanos consist of 14 active players from any NFL team.
      There are no position limits, and owners are free to have as many players from any position as they like.
      Only players from the active roster may be used as part of a team's starting lineup.
    </sub-section>

    <sub-section title="The Draft">
      The league will vote on a draft night each season.
      Owners are expected to attend the draft in person, unless they live too far away.
      The draft order will be determined randomly by the <a target="_blank" href="https://sleeper.app">sleeper.app</a>.
      The draft will be a serpentine order, where the person with the first pick in Round 1 will have the last pick in Round 2 and the first pick in Round 3.
      When it is the owner's turn to draft, they will have one minute to make their pick.
      If they fail to make a pick within the designated amount of time the CPU will auto pick on their behalf.
      This can be undone by the commissioner one time but after that the auto picked player is final.
      This cannot be undone if the next player has already been drafted.
    </sub-section>

    <div class="row">
      <div class="col">
        <sub-section title="Free Agency">
          Waivers put a temporary freeze on unclaimed players, giving everyone a chance to make a claim on them.
          There are only 2 cases where players go on waivers.
        </sub-section>

        <ol>
          <li>
            A player's game has started, at which point they go on waivers that run Tuesday night**.
          </li>
          <li>
            A player goes on waivers if he is dropped by an owner and was owned for more than 24 hours.
            By default they go on waivers for 2 days (48 hours) from time of drop.
          </li>
        </ol>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <sub-section>
          Children of Thanos will use FAAB bidding to get players off waivers.
          Owners may add or drop as many players as they want each week, with waivers running on Tuesday night**.
          Each owner has a budget of $100.
        </sub-section>

        <ul>
          <li>
            Bids are blind, so other owners can't see what your bid is.
          </li>
          <li>
            The highest bid at the end of the waiver period wins the player.
          </li>
          <li>
            The winning manager has their bid removed from their FAAB budget.
          </li>
          <li>
            In the event of a tie, a continuing rolling list waiver priority order is implemented for the tiebreaker, based on draft order.
            If you win a FAAB tiebreaker, you go to the end of the list.
          </li>
          <li>
            The minimum bid on any player is $0.
          </li>
        </ul>
      </div>
    </div>

    <sub-section>
      <span class="italic">** Note: Tuesday waivers technically translate to Wednesday 12:05am</span>
    </sub-section>

    <sub-section title="Trades">
      Trading is not only allowed but encouraged in Children of Thanos and may be conducted between any owner.
      Trades may include multiple players from any position.
      Trades can also be made involving any number of teams.
      No trades will be allowed after Week 12 of the fantasy football season.
      Our league site <a href="https://sleeper.app">sleeper.app</a> does not require rosters to be under the league limit prior to a trade or a draft completing.
      The user interface simply locks owner from making moves until they cut down players to meet the roster limit requirements.
    </sub-section>

    <sub-sub-section title="Trade Veto">
      The commissioner reserves the right to reverse any trade that they deem inconsistent with league competition and fair-play standards.
      This veto will only be invoked in extreme cases where it is obvious that one owner is trying to give another owner an unfair advantage.
      The owners in question may offer reasons why the trade should be allowed, but the decision of the commissioner is final once it has been rendered.
      There is not a designated time period to protest trades but if you have complaints contact the commissioner and a discussion will begin.
    </sub-sub-section>

    <div class="row">
      <div class="col">
        <sub-section title="Lineups">
          Starting lineups in Children of Thanos will consist of the following:
        </sub-section>

        <ul>
          <li>1 quarterback</li>
          <li>2 running backs</li>
          <li>2 wide receivers</li>
          <li>1 tight end</li>
          <li>1 flex (wide receiver, or tight end)</li>
          <li>1 flex (running back, wide receiver, or tight end)</li>
          <li>1 defense / special teams</li>
        </ul>
      </div>
    </div>

    <sub-section>
      There will also be 6 bench spots.
      Players may be added or removed from the starting lineup up until the start of the first NFL game.
      On weeks where the NFL has a Thursday game, owners may make changes to their lineups up to the start of the second NFL game, but may not change a player that has already played.
    </sub-section>

    <sub-sub-section title="Position Designations">
      From time to time, the NFL may change their designation of a player from one position to another or a player may line up in multiple positions throughout the game.
      For example, a wide receiver may be switched to a tight end and vice versa.
      For the purposes of Children of Thanos, a player may have only one official designation; any disputed designations will be resolved by the commissioner, using the official distinctions on the <a href="https://sleeper.app">sleeper.app</a> as a guide.
      Players may only start and score points based on their Children of Thanos distinction.
      See the League Scoring section for more details.
    </sub-sub-section>

    <sub-section title="Bye-week Penalties">
      Any owner who starts a player that is on a bye week, regardless of intention, the owner will be ridiculed publicly in league chat the first time.
      The second time this happens they won't be invited back for the next season.
      It is each owner's responsibility to submit a valid lineup each week and no exceptions will be made.
    </sub-section>

    <sub-section title="Active Ownership Requirements">
      Each owner is expected to actively manager their team each week, even if they are eliminated from any playoff consideration.
      All owners are expected to respond to trades in a timely manner.
      They are also expected to talk as much trash as possible.
      If a team becomes inactive it will not be taken over and will finish out the rest of the season as is.
      That owner will also not be asked to return and will lose the commissioners friendship for the duration of their existence.
    </sub-section>

  </div>
</template>

<script>
import SubSection from '~/components/SubSection'
import SubSubSection from '~/components/SubSubSection'

export default {
  components: {
    SubSection,
    SubSubSection,
  },
  computed: {
    rosterPositions() {
      console.log(this.$store.state.league.leagueInfo.roster_positions);
      return this.$store.state.league.leagueInfo.roster_positions;
    }
  }
};
</script>

<style>

</style>
