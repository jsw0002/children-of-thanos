<template>
  <div class="row">
    <div class="col-12">
      <h5 v-if="title">{{ title }}</h5>

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
