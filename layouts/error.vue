<template>
  <section class="error-404" v-if="error.statusCode === 404">
    <div class="row">
      <div class="col">
        <h1>Well who do we have here?</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Looks like you've found a page that doesn't exist.</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Question is was it an accident or on purpose?</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img class="img-fluid" src="images/deadpool-stare.gif" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>
          It's not too late to <nuxt-link to="/">turn back</nuxt-link> now.
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
</style>
