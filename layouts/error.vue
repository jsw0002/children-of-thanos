<template>
  <section
    v-if="error.statusCode === 404"
    class="error-404"
  >
    <v-layout row>
      <v-flex>
        <h1
          class="center-text mt-5"
        >
          Well who do we have here?
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h3
          class="center-text"
        >
          Looks like you've found a page that doesn't exist.
        </h3>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h3
          class="center-text"
        >
          Question is was it an accident or on purpose?
        </h3>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-img
          class="center-image mt-3 mb-3"
          src="images/deadpool-stare.gif"
          max-height="1500"
          max-width="735"
        />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h3
          class="center-text"
        >
          It's not too late to
          <nuxt-link to="/">
            turn back
          </nuxt-link>
          now.
        </h3>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  props: ['error'] // eslint-disable-line vue/require-prop-types
}
</script>

<style>
.center-text {
  text-align: center;
}
.center-image {
  margin: 0 auto;
}
</style>
