<template>
  <v-layout
    row
  >
    <v-flex>
      <p
        v-if="title"
        class="mb-2 headline"
      >
        {{ title }}
      </p>
      <p>
        <slot></slot>
      </p>
      <span>
        <slot name="list"></slot>
      </span>
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
