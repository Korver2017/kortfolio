<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.isDarkMode ? 'dark-mode' : '',
      },
    }
  },
  data() {
    return {}
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
