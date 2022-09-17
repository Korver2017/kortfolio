<template>
  <div id="page-top">
    <!-- Navbar -->
    <nav
      :class="[
        'navbar navbar-expand-lg navbar-dark bg-primary fixed-top',
        { navShow: isNavShown },
      ]"
      id="sideNav"
    >
      <div class="navbarContent ml-3">
        <nuxt-link class="navbar-brand" to="/">
          <span class="d-block d-lg-none">Korver Huang</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="~assets/images/avatar.jpg"
              alt=""
            />
          </span>
        </nuxt-link>
        <button
          @click="toggleCollapse"
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse"
          :class="{ collapse: isCollapsed }"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="introduction"
                >Introduction</nuxt-link
              >
            </li>

            <li class="nav-item">
              <nuxt-link class="nav-link" to="skills">Skills</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="collection">Collection</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Light / Dark mode toggle button -->
    <div
      @click="toggleDarkMode"
      class="switcher"
      :class="{ active: isDarkMode }"
    >
      <p>Light / Dark Mode</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    menuCollapsed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isNavShown: false,
      isCollapsed: this.menuCollapsed,
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
  watch: {
    menuCollapsed(newVal) {
      this.isCollapsed = newVal
    },
  },
  mounted() {
    this.isNavShown = true
    setTimeout(() => {
      this.$store.dispatch('triggerAnimation', true)
    }, 600)
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch('toggleDarkMode')
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
      this.$emit('toggleCollapse', this.isCollapsed)
    },
  },
}
</script>

<style scoped lang="scss">
.navbar-dark {
  .nuxt-link-exact-active {
    color: rgba(255, 255, 255, 0.75);
  }
}
@media screen and (max-width: 991px) {
  #sideNav {
    left: 0;
    .navbar-brand {
      margin-right: 0;
    }
  }
}
</style>
