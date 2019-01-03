<template>
  <div class="container-fluid">
    <navigation></navigation>
    <nuxt keep-alive/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation';
import PageFooter from '~/components/PageFooter'

export default {
  components: {
    Navigation,
    PageFooter,
  },
};
</script>


<style>

</style>
