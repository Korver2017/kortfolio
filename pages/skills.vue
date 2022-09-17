<template>
  <!-- Main content -->
  <div class="main container-fluid ml-3 p-0">
    <!-- Skills section -->
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      :class="{ display: isTriggered }"
      id="skills"
    >
      <div class="my-auto mx-2">
        <h2 class="text-primary mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Skills, Tools, and Others</div>
        <!-- Skill icons -->
        <Icons />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skills',
  head: {
    title: 'Skills',
  },
  computed: {
    isTriggered() {
      return this.$store.getters.isTriggered
    },
  },
}
</script>

<style scoped lang="scss"></style>
