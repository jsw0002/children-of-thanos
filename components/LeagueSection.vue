<template>
  <v-layout
    row
    class="anchor-buffer mb-4"
  >
    <v-flex>
      <p
        v-if="title"
        :id="id"
        class="mt-4 display-1"
      >
        {{ title }}
      </p>
      <span class="body-1">
        <slot></slot>
      </span>
      <v-divider />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.anchor-buffer {
  display: block;
  padding-top: 400px;
  margin-top: -400px;
}
</style>
