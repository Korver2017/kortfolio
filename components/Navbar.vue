<template>
  <div id="page-top">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <div class="navbarContent ml-3">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Korver Huang</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="~assets/images/avatar.jpg"
              alt=""
            />
          </span>
        </a>
        <button
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="/"
                >Cover</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="introduction"
                >Introduction</nuxt-link
              >
            </li>

            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="skills"
                >Skills</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="collection"
                >Collection</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link js-scroll-trigger" to="contact"
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Light / Dark mode toggle button -->
    <div class="switcher">
      <p>Light / Dark Mode</p>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.navbar-dark {
  .nuxt-link-exact-active {
    color: rgba(255, 255, 255, 0.75);
  }
}
</style>
