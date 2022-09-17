<template>
  <div @click="collapseMenu($event)">
    <Navbar
      ref="navbar"
      :menuCollapsed="menuCollapsed"
      @toggleCollapse="handleToggleCollapse"
    />
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
    return {
      menuCollapsed: true,
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
  mounted() {},
  methods: {
    collapseMenu($event) {
      const navbar = this.$refs.navbar.$el
      if (navbar.contains($event.target)) return

      this.menuCollapsed = true
    },
    handleToggleCollapse(isCollapsed) {
      this.menuCollapsed = isCollapsed
    },
  },
}
</script>

<style scoped></style>
