<template>
  <section class="footer">
    <b-navbar class="bottom" toggleable="md" type="dark" variant="primary">
      <div class="container">
        <span class="navbar-text">
          &copy; {{ new Date().getFullYear() }}
        </span>
      </div>
    </b-navbar>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  .bottom {
    right: 0;
    bottom: 0;
  }
</style>
