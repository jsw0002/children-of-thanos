<template>
  <v-layout
    row
  >
    <v-flex>
      <p
        v-if="title"
        class="mb-2 title"
      >
        {{ title }}
      </p>
      <p
        class="caption"
      >
        <slot></slot>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
