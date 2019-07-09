<template>
  <div>
    <v-layout
      row
      fill-height
    >
      <v-flex>
        <img
          class="hero-image"
          src="images/hero.png"
        />
      </v-flex>
    </v-layout>

    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        align-self-center
        xl3
        sm8
      >
        <v-card
          color="secondary"
          class="ma-3"
        >
          <v-card-title>
            <v-avatar
              size="180"
              class="mx-auto"
            >
              <img :src="championAvatar" />
            </v-avatar>
          </v-card-title>
          <v-card-text
            class="headline font-weight-bold text-xs-center"
          >
            Children of Thanos <br />
            2018 League Champion <br />
            <span class="title">{{ champion.teamName }}</span>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex
        align-self-center
        xl3
        sm8
      >
        <v-card
          color="secondary"
          class="ma-3"
        >
          <v-card-title>
            <v-avatar
              size="180"
              class="mx-auto"
            >
              <img :src="loserAvatar" />
            </v-avatar>
          </v-card-title>
          <v-card-text
            class="headline font-weight-bold text-xs-center"
          >
            Children of Thanos <br />
            2018 Toilet Bowl Champion <br />
            <span class="title">{{ loser.teamName }}</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout
      wrap
    >
      <v-flex
        class="mx-auto my-3"
        xl6
        lg8
        md12
      >
        <v-card
          color="secondary"
          dark
        >
          <v-card-title>2018 Regular Season</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="regularHeaders"
              :items="history"
              class="elevation-1"
              hide-actions
              disable-initial-sort
            >
              <template v-slot:items="props">
                <td>{{ props.item.displayName }}</td>
                <td>{{ props.item.regularWins }}</td>
                <td>{{ props.item.regularLosses }}</td>
                <td>{{ props.item.regularPS }}</td>
                <td>{{ props.item.regularPA }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex
        class="mx-auto my-3"
        xl6
        lg8
        md12
      >
        <v-card
          color="secondary"
          dark
        >
          <v-card-title>2018 Post Season</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="postHeaders"
              :items="history"
              class="elevation-1"
              hide-actions
              disable-initial-sort
            >
              <template v-slot:items="props">
                <td>{{ props.item.displayName }}</td>
                <td>{{ props.item.postWins }}</td>
                <td>{{ props.item.postLosses }}</td>
                <td>{{ props.item.postPS }}</td>
                <td>{{ props.item.postPA }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex
        class="mx-auto my-3"
        xl6
        lg8
        md12
      >
        <v-card
          color="secondary"
          dark
        >
          <v-card-title>2018 Season</v-card-title>
          <v-card-text>
            <v-data-table
              :headers="regularHeaders"
              :items="history"
              class="elevation-1"
              hide-actions
              disable-initial-sort
            >
              <template v-slot:items="props">
                <td>{{ props.item.displayName }}</td>
                <td>{{ props.item.regularWins + props.item.postWins }}</td>
                <td>{{ props.item.regularLosses + props.item.postLosses }}</td>
                <td>{{ props.item.regularPS + props.item.postPS }}</td>
                <td>{{ props.item.regularPA + props.item.postPA }}</td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import history from '../static/data/history-2018.json'

export default {
  data() {
    return {
      regularHeaders: [
        { text: 'Name', value: 'displayName', sortable: false },
        { text: 'Wins', value: 'regularWins' },
        { text: 'Losses', value: 'regularLosses' },
        { text: 'Points Scored', value: 'regularPS' },
        { text: 'Points Against', value: 'regularPA' },
      ],
      postHeaders: [
        { text: 'Name', value: 'displayName', sortable: false },
        { text: 'Wins', value: 'postWins' },
        { text: 'Losses', value: 'postLosses' },
        { text: 'Points Scored', value: 'postPS' },
        { text: 'Points Against', value: 'postPA' },
      ],
      history
    }
  },
  computed: {
    champion() {
      return history.find(user => user.champion === true);
    },
    championAvatar() {
      return `https://sleepercdn.com/avatars/${this.champion.avatar}`;
    },
    loser() {
      return history.find(user => user.loser === true);
    },
    loserAvatar() {
      return `https://sleepercdn.com/avatars/${this.loser.avatar}`;
    },
  }
}
</script>

<style>
.hero-image {
  width: 100%;
}
</style>
