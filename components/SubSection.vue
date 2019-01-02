<template>
  <div class="row">
    <div class="col">
      <h3 v-if="title">{{ title }}</h3>

      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ],
};
</script>

<style>

</style>
