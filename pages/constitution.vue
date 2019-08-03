<template>
  <v-container class="constitution">
    <h1
      class="display-4 hidden-sm-and-down"
    >
      Constitution
    </h1>
    <h1
      class="display-3 hidden-md-and-up"
    >
      Constitution
    </h1>
    <league-section id="league-overview" title="League Overview">
      <league-sub-section>
        Welcome to Children of Thanos.
        This is a 10-team league that was formed in 2018.
        The league will be run on <a target="_blank" href="https://sleeper.app/">sleeper.app</a>.
        All owners are expected to pay their league fee before the draft begins.
        If you do not plan to participate in the league the following season let me know at least one month prior to the draft so I can find a replacement.
        This league is designed to be a competition between owners, but it not a cut-throat league where anything goes.
        The rules described in this section are designed to act as a guideline for overall league play, and any disputes will be handled by the commissioner of the league.
        Please remember that the overall goal of this league is to have fun and enjoy the game of football. If you have any question or concerns, please do not hesitate to ask.
      </league-sub-section>

      <league-sub-section title="Commissioner Information">
        The commissioner for Children Of Thanos for 2019 is Jordan Willis.
        I can be contacted through league chat, email <a href="mailto:jsw0002@gmail.com">jsw0002@gmail.com</a>, or cell <a href="tel:1-317-496-4739">317.496.4739</a>.
        I do this for the love of football and fantasy.
        I will be responsible for resolving all disputes that are not expressly covered by this constitution.
        While all owners are encouraged to submit suggestions to the commissioner, the commissioner's decision on all matters is final.
      </league-sub-section>

      <league-sub-section title="Living Constitution">
        It is important to note that this is a living, breathing constitution that will change and evolve over the lifetime of this league.
        Changes will happen between seasons as often as possible and will be effective from that point moving forward.
        If you have suggestions for changes, please submit them to the commissioner by any of the available contact methods.
      </league-sub-section>
    </league-section>

    <league-section id="league-financing" title="League Financing">
      <league-sub-section>
        The league fee for Children of Thanos will be charged to each team owner, payable to the commissioner on or before the draft.
        Fees will be accepted as cash, check, <a target="_blank" href="https://www.chase.com/personal/quickpay">Chase QuickPay</a>, <a target="_blank" href="https://paypal.me/jsw0002">PayPal</a>, or <a target="_blank" href="https://venmo.com/">Venmo</a>.
      </league-sub-section>

      <league-sub-section title="League Fee">
        The Children of Thanos league fee for the 2018 season will be $25 from each owner.
        This is not an entry fee for the league.
        All money goes to cover the cost of the league championship trophy, the toilet bowl trophy, and the league winner's championship ring with case.
        This fee is due before the draft begins.
        All subsequent years fee will be $10 from each owner and will consist of the league winner's championship ring and a new nameplate for the league championship trophy.
      </league-sub-section>

      <league-sub-section title="Trophies"></league-sub-section>

      <v-flex
        xl3
        lg5
        md6
        sm8
        class="mb-3"
      >
        <v-carousel
          hide-delimiters
        >
          <v-carousel-item
            v-for="(trophy,i) in trophies"
            :key="i"
            :src="trophy.src"
          >
            <v-sheet>
              <div
                class="center-text subheading pb-2 pt-2 background-thanos"
              >
                {{ trophy.title }}
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>

      <league-sub-sub-section>
        * Championship Trophy and Toilet Bowl trophy should be transferred to the new owners within 30 days of the league end date.
        Loser pays all shipping fees if necessary.
      </league-sub-sub-section>

      <league-sub-sub-section>
        * <span class="italic">Troy's Rule:</span> As punishment for finishing last in the league the loser will have to take a picture of themselves holding the toilet bowl and make it their team picture for the next season.
        Also their team name for that year will have to incorporate the word "loser".
      </league-sub-sub-section>
    </league-section>

    <league-section id="league-setup" title="League Setup & Competition">
      <league-sub-section>
        The Children of Thanos will consist of 10 different teams.
        The schedule will be randomly generated, with each team playing every other team at least once in head-to-head match-up.
        There will be an additional game each week against the median score for that week.
      </league-sub-section>

      <league-sub-section title="Playoffs">
        After the completion of the regular season, the top four teams will make the playoffs.
        Division winners will be ranked according to record with tie breakers going to total points then division record.
        The remaining two teams will be ranked using the same method.
        In Week 15, the 1 seed will play the 4 seed and the 2 seed will play the 3 seed.
        The winners from Week 15 will play in the championship during Week 16 of the NFL.
      </league-sub-section>
    </league-section>

    <league-section id="rosters-and-lineups" title="Rosters & Lineups">
      <league-sub-section>
        Rosters in Children of Thanos consist of 14 active players from any NFL team.
        There are no position limits, and owners are free to have as many players from any position as they like.
        Only players from the active roster may be used as part of a team's starting lineup.
      </league-sub-section>

      <league-sub-section title="The Draft">
        The league will vote on a draft night each season.
        Owners are expected to attend the draft in person, unless they live too far away.
        The draft order will be determined randomly by the <a target="_blank" href="https://sleeper.app">sleeper.app</a>.
        The draft will be a serpentine order, where the person with the first pick in Round 1 will have the last pick in Round 2 and the first pick in Round 3.
        When it is the owner's turn to draft, they will have two minutes to make their pick.
        If they fail to make a pick within the designated amount of time the CPU will auto pick on their behalf.
        This can be undone by the commissioner one time but after that the auto picked player is final.
        This cannot be undone if the next player has already been drafted.
      </league-sub-section>

      <league-sub-section title="Free Agency">
        Waivers put a temporary freeze on unclaimed players, giving everyone a chance to make a claim on them.
        There are only 2 cases where players go on waivers.

        <template v-slot:list>
          <ol class="pb-3">
            <li>A player's game has started, at which point they go on waivers that run Tuesday night**.</li>
            <li>A player goes on waivers if he is dropped by an owner and was owned for more than 24 hours. By default they go on waivers for 2 days (48 hours) from time of drop.</li>
          </ol>
        </template>
      </league-sub-section>

      <league-sub-section>
        Children of Thanos will use FAAB bidding to get players off waivers.
        Owners may add or drop as many players as they want each week, with waivers running on Tuesday night**.
        Each owner has a budget of $100.

        <template v-slot:list>
          <ul class="pb-3">
            <li>Bids are blind, so other owners can't see what your bid is.</li>
            <li>The highest bid at the end of the waiver period wins the player.</li>
            <li>The winning manager has their bid removed from their FAAB budget.</li>
            <li>In the event of a tie, a continuing rolling list waiver priority order is implemented for the tiebreaker, based on draft order. If you win a FAAB tiebreaker, you go to the end of the list.</li>
            <li>The minimum bid on any player is $0.</li>
          </ul>
        </template>
      </league-sub-section>

      <league-sub-sub-section>
        <span class="italic">** Note: Tuesday waivers technically translate to Wednesday 12:05am</span>
      </league-sub-sub-section>

      <league-sub-sub-section>
        <span class="italic">
          ** Note: We are trying a different waiver rule this year with FAAB being used on Wednesday and all other days serving as a first come first serve.
          I would like to insert the disclaimer that I believe this is how sleeper handles them with the settings I have selected but we may discover some discrepancies along the way that will have to be dealt with after the season ends unless a unanimous decision is made to make an adjustment.
        </span>
      </league-sub-sub-section>

      <league-sub-section title="Trades">
        Trading is not only allowed but encouraged in Children of Thanos and may be conducted between any owner.
        Trades may include multiple players from any position.
        Trades can also be made involving any number of teams.
        No trades will be allowed after Week 12 of the fantasy football season.
        Our league site <a href="https://sleeper.app">sleeper.app</a> does not require rosters to be under the league limit prior to a trade or a draft completing.
        The user interface simply locks owner from making moves until they cut down players to meet the roster limit requirements.
      </league-sub-section>

      <league-sub-sub-section title="Trade Veto">
        The commissioner reserves the right to reverse any trade that they deem inconsistent with league competition and fair-play standards.
        This veto will only be invoked in extreme cases where it is obvious that one owner is trying to give another owner an unfair advantage.
        The owners in question may offer reasons why the trade should be allowed, but the decision of the commissioner is final once it has been rendered.
        There is not a designated time period to protest trades but if you have complaints contact the commissioner and a discussion will begin.
      </league-sub-sub-section>

      <league-sub-section title="Lineups">
        Starting lineups in Children of Thanos will consist of the following:

        <template v-slot:list>
          <ul class="pb-3">
            <li>1 quarterback</li>
            <li>2 running backs</li>
            <li>2 wide receivers</li>
            <li>1 tight end</li>
            <li>1 flex (wide receiver, or tight end)</li>
            <li>1 flex (running back, wide receiver, or tight end)</li>
            <li>1 defense / special teams</li>
          </ul>
        </template>
      </league-sub-section>

      <league-sub-section>
        There will also be 6 bench spots and one IR spot.
        Only players with the designation of OUT will be allowed in the IR spot.
        If you have a player on IR who is no longer IR eligible, you must create room by dropping someone from your bench before you can make further Free Agent or Waiver moves.
        Your other option is to make a trade if your roster is locked due to this scenario.
        Players may be added or removed from the starting lineup up until the start of the first NFL game.
        On weeks where the NFL has a Thursday game, owners may make changes to their lineups up to the start of the second NFL game, but may not change a player that has already played.
      </league-sub-section>

      <league-sub-sub-section title="Position Designations">
        From time to time, the NFL may change their designation of a player from one position to another or a player may line up in multiple positions throughout the game.
        For example, a wide receiver may be switched to a tight end and vice versa.
        For the purposes of Children of Thanos, a player may have only one official designation; any disputed designations will be resolved by the commissioner, using the official distinctions on the <a href="https://sleeper.app">sleeper.app</a> as a guide.
        Players may only start and score points based on their Children of Thanos distinction.
        See the League Scoring section for more details.
      </league-sub-sub-section>

      <league-sub-section title="Bye-week Penalties">
        Any owner who starts a player that is on a bye week, regardless of intention, the owner will be ridiculed publicly in league chat the first time.
        The second time this happens they won't be invited back for the next season.
        It is each owner's responsibility to submit a valid lineup each week and no exceptions will be made.
      </league-sub-section>

      <league-sub-section title="Active Ownership Requirements">
        Each owner is expected to actively manager their team each week, even if they are eliminated from any playoff consideration.
        All owners are expected to respond to trades in a timely manner.
        They are also expected to talk as much trash as possible.
        If a team becomes inactive it will not be taken over and will finish out the rest of the season as is.
        That owner will also not be asked to return and will lose the commissioners friendship for the duration of their existence.
      </league-sub-section>
    </league-section>

    <league-section id="scoring-system" title="Scoring System">
      <league-sub-section>
        Scoring in Children of Thanos will be computed to two decimal places.
        This will allow points to be awarded or deducted for every positive or negative yard and will dramatically reduce the chance of a tie game.
        Players are awarded fantasy points for each week that they are included in the team's starting lineup.
        Players may only start at one position in any given week and will only be awarded points as described by their position distinction below.
      </league-sub-section>

      <league-sub-section>
        QB / RB / WR / TE Scoring

        <template v-slot:list>
          <ul class="pb-3">
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
        </template>
      </league-sub-section>

      <league-sub-sub-section>
        <span class="italic">** If a player reaches the bonus in multiple categories they will receive the bonus for each</span>
      </league-sub-sub-section>

      <league-sub-section>
        Defense Scoring

        <template v-slot:list>
          <ul class="pb-3">
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
        </template>
      </league-sub-section>

      <league-sub-section title="Point Totals and Final Scores">
        Children of Thanos will be hosted on <a href="https://sleeper.app">sleeper.app</a>.
        Head to head scoring will be determined each week by the stats from that website.
        From time to time, the NFL may go back and change the scoring of certain plays later in the week.
        <a href="https://sleeper.app">sleeper.app</a> gives the commissioner the option to make these scores retroactive.
        However, to maintain a sense of fairness and avoid confusion in the league, all head-to-head scoring will be resolved as of Tuesday at noon Eastern.
        Any scoring changes that come out from the NFL after that time will not be applied to the league.
      </league-sub-section>
    </league-section>

    <league-section id="offseason-activities" title="Offseason Activities">
      <league-sub-section>
        Owners are strongly encouraged to send their current and preferred contact information to the commissioner.
        Please make sure to include your name, phone number and email address if we need to reach you during the off season.
        You should expect to be contacted in July with information about next year's draft.
        Thanks, and welcome to Children of Thanos!
      </league-sub-section>
    </league-section>

    <league-section id="amendments" title="Amendments">
      <league-sub-section>
        <template v-slot:list>
          <ol class="pb-3">
            <li>All amendments proposed by league members must receive majority approval prior to the start of the season.</li>
            <li>All amendments proposed during the season will be reviewed at the end of the current season and will not be made applicable to the current season.</li>
            <li>All amendments to the Children of Thanos constitution will be named according to the league member who caused or identified the problem.</li>
            <li>The league trophy will never be renamed to stroke the ego of a league winner.</li>
          </ol>
        </template>
      </league-sub-section>
    </league-section>
  </v-container>
</template>

<script>
import LeagueSection from '~/components/LeagueSection'
import LeagueSubSection from '~/components/LeagueSubSection'
import LeagueSubSubSection from '~/components/LeagueSubSubSection'

export default {
  components: {
    LeagueSection,
    LeagueSubSection,
    LeagueSubSubSection
  },
  data() {
    return {
      trophies: [
        {
          src: 'images/championship-trophy.jpg',
          title: 'Championship Trophy'
        },
        {
          src: 'images/championship-ring.jpg',
          title: 'Championship Ring'
        },
        {
          src: 'images/toilet-bowl-trophy.jpg',
          title: 'Toilet Bowl Trophy'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.background-thanos {
  background-color: #673AB7;
}

.center-text {
  text-align: center;
}

.constitution p,
.constitution li {
  max-width: 75ch;
}

.container a {
  color: #4CAF50;
  text-decoration: none;
}

.container a:hover {
  text-decoration: underline;
}

.italic {
  font-style: italic;
}

.v-carousel__next .v-btn,
.v-carousel__prev .v-btn {
  color: #000;
}
</style>
