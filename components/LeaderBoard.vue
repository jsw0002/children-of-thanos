<template>
  <div class="row">
    <h3 class="leaderboard-title">Regular Season</h3>
    <b-card-group class="leaderboard" tag="Regular Season">
      <b-card no-body header="User">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            {{ user.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Wins">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="primary" pill>
              {{ user.regularSeason.wins }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Loses">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="danger" pill>
              {{ user.regularSeason.loses }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Scored">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="success" pill>
              {{ user.regularSeason.pointsScored }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Against">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="warning" pill>
              {{ user.regularSeason.pointsAgainst }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>

    <h3 class="leaderboard-title">Post Season</h3>
    <b-card-group class="leaderboard" tag="Post Season">
      <b-card no-body header="User">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            {{ user.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Wins">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="primary" pill>
              {{ user.postSeason.wins }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Loses">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="danger" pill>
              {{ user.postSeason.loses }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Scored">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="success" pill>
              {{ user.postSeason.pointsScored }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Against">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="warning" pill>
              {{ user.postSeason.pointsAgainst }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>

    <h3 class="leaderboard-title">All Time</h3>
    <b-card-group class="leaderboard" tag="All Time">
      <b-card no-body header="User">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            {{ user.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Wins">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="primary" pill>
              {{ user.postSeason.wins + user.regularSeason.wins }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Loses">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="danger" pill>
              {{ user.postSeason.loses + user.regularSeason.loses }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Scored">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="success" pill>
              {{ user.postSeason.pointsScored + user.regularSeason.pointsScored }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <b-card no-body header="Points Against">
        <b-list-group>
          <b-list-group-item
            v-for="(user, index) in history.players"
            :key="index">
            <b-badge variant="warning" pill>
              {{ user.postSeason.pointsAgainst + user.regularSeason.pointsAgainst }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import history from '../static/data/history.json'
export default {
  data() {
    return {
      history,
    };
  },
};
</script>

<style>

</style>
