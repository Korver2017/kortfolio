<template>
  <Transition>
    <!-- Main content -->
    <div class="main container-fluid ml-5 p-0">
      <!-- Home section -->
      <section
        :class="{ display: isTriggered }"
        class="resume-section p-3 p-lg-5 d-flex d-column"
        id="home"
      >
        <div class="my-auto mx-2">
          <h1
            class="mb-0"
            :class="{ 'animate__animated animate__jackInTheBox': isTriggered }"
          >
            Korver
            <span class="text-primary">Huang</span>
          </h1>
          <div
            class="email mb-3"
            :class="{ 'animate__animated animate__jackInTheBox': isTriggered }"
          >
            korver2017@gmail.com
          </div>
          <h3 class="scrollMoveOut font-weight-bold mb-0 text-primary">
            Front-End Engineer
          </h3>
          <p class="experience scrollMoveOut lead mb-2 text-primary">
            With 3 Years Experience Until 2022/01 (100% Remote)
          </p>
          <p class="education scrollMoveOut lead"></p>
          <div class="social-icons">
            <a
              class="github"
              href="https://github.com/Korver2017"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class="linkedin"
              href="https://www.linkedin.com/in/korver2017/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    isTriggered() {
      return this.$store.getters.isTriggered
    },
  },
  mounted() {
    this.isMounted = true
  },
}
</script>

<style scoped lang="scss"></style>
