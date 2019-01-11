<template>
  <div class="row">
    <b-form-group class="buttons" label="What would you like to see?">
      <b-form-radio-group id="history" v-model="selected" name="radioSubComponent" buttons button-variant="outline-primary">
        <b-form-radio value="allTime">All Time Standings</b-form-radio>
        <b-form-radio value="regular">Regular Season Standings</b-form-radio>
        <b-form-radio value="post">Post Season Standings</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-table v-if="selected === 'regular'" class="table" striped :items="history" :fields="regularFields">
      <template slot="index" slot-scope="data">{{data.index +1}}</template>
    </b-table>

    <b-table v-if="selected === 'post'" class="table" striped :items="history" :fields="postFields">
      <template slot="index" slot-scope="data">{{data.index +1}}</template>
    </b-table>

    <b-table v-if="selected === 'allTime'" class="table" striped :items="history" :fields="allFields">
      <template slot="index" slot-scope="data">{{data.index +1}}</template>
      <template slot="wins" slot-scope="data">{{data.item.regularWins + data.item.postWins}}</template>
      <template slot="loses" slot-scope="data">{{data.item.regularLoses + data.item.postLoses}}</template>
      <template slot="pointsScored" slot-scope="data">{{data.item.regularPS + data.item.postPS}}</template>
      <template slot="pointsAgainst" slot-scope="data">{{data.item.regularPA + data.item.postPA}}</template>
    </b-table>
  </div>
</template>

<script>
import history from '../static/data/history-2018.json';

export default {
  data() {
    return {
      history,
      selected: 'allTime',
      regularFields: {
        index: {label: 'Regular Season Standings'},
        displayName: {label: 'Username'},
        regularWins: {label: 'Wins', sortable: true},
        regularLoses: {label: 'Loses', sortable:true},
        regularPS: {label: 'Points Scored', sortable:true},
        regularPA: {label: 'Points Against', sortable:true},
      },
      postFields: {
        index: {label: 'Post Season Standings'},
        displayName: {label: 'Username'},
        postWins: {label: 'Wins', sortable: true},
        postLoses: {label: 'Loses', sortable:true},
        postPS: {label: 'Points Scored', sortable:true},
        postPA: {label: 'Points Against', sortable:true},
      },
      allFields: {
        index: {label: 'All Time Standings'},
        displayName: {label: 'Username'},
        wins: {label: 'Wins'},
        loses: {label: 'Loses'},
        pointsScored: {label: 'Points Scored'},
        pointsAgainst: {label: 'Points Against'},
      }
    };
  },
};
</script>

<style>

</style>
