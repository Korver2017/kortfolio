<template>
  <!-- Main content -->
  <div class="main container-fluid ml-3 p-0">
    <!-- Introduction section. -->
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-row"
      :class="{ display: isTriggered }"
      id="introduction"
    >
      <div class="my-auto mx-2">
        <h2 class="text-primary mb-5">Introduction</h2>
        <div class="row">
          <!-- Relative working experience -->
          <div class="resume-item col-md-6 d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-2">Front-End Development Working Experience</h3>
              <div class="intro-group">
                <ul>
                  <li>
                    3 years of 100% remote development experience until 2022/01.
                  </li>
                  <li>
                    Majorly based on Vue Ecosystem to develop Human-Machine
                    Interface System.
                  </li>
                  <li>
                    Deal with Axios, AJAX, RESTful APIs, ES6+, Promises and so
                    on.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Learning path -->
          <div class="resume-item col-md-6 d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-2">Self-Learning to Code</h3>
              <div class="intro-group">
                <ul>
                  <li>Self-Learning about 1.5 years back and forth.</li>
                  <li>
                    Future goals: Vue / React Ecosystem, CS50, Testing,
                    TypeScript, Node.js.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Language -->
          <div class="resume-item col-md-6 d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-2">TOEIC 870</h3>
              <div class="intro-group">
                <ul>
                  <li>Be able to read English documentation.</li>
                  <li>English communication.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="resume-item col-md-6 d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-2">Master of Business Administration</h3>
              <div class="intro-group">
                <ul>
                  <li>Accelerate problem-solving ability.</li>
                  <li>Learn how to dive into a study.</li>
                  <li>Know the core of business & management.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Introduction',
  },
  data() {
    return {}
  },
  computed: {
    isTriggered() {
      return this.$store.getters.isTriggered
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
