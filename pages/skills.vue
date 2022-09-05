<template>
  <!-- Main content -->
  <div class="main container-fluid ml-5 p-0">
    <!-- Skills section -->
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      :class="{ display: isTriggered }"
      id="skills"
    >
      <div class="my-auto">
        <h2 class="text-primary mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>

        <!-- Skill icons -->
        <div class="icons-group my-4">
          <span class="iconify" data-icon="logos:vue" />
          <span class="iconify" data-icon="logos:vitejs" />
          <span class="iconify" data-icon="logos:nuxt-icon" />
        </div>

        <div class="icons-group my-4">
          <span class="iconify" data-icon="logos:javascript"></span>
          <span class="iconify" data-icon="logos:sass"></span>
          <span class="iconify" data-icon="logos:bootstrap"></span>
          <span class="iconify" data-icon="logos:html-5"></span>
          <span class="iconify" data-icon="logos:css-3"></span>
        </div>

        <div class="icons-group my-4">
          <span class="iconify" data-icon="logos:git-icon"></span>
          <span class="iconify" data-icon="logos:github-icon"></span>
          <span class="iconify" data-icon="logos:gitlab"></span>
          <span class="iconify" data-icon="logos:sourcetree"></span>
          <span class="iconify" data-icon="logos:gulp"></span>
          <span class="iconify" data-icon="logos:slack-icon"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skills',
  computed: {
    isTriggered() {
      return this.$store.getters.isTriggered
    },
  },
}
</script>

<style scoped>
.iconify {
  font-size: 3.3rem;
  margin-right: 8px;
  margin-left: 8px;
}
</style>
