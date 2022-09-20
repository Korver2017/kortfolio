<template>
  <Transition>
    <div class="main container-fluid ml-3 p-0">
      <section
        :id="id"
        :class="{ display: isTriggered }"
        class="resume-section p-3 p-lg-5 d-flex d-column flex-column"
      >
        <slot />
      </section>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'wrapper',
  props: {
    page: {
      type: String,
    },
  },
  data() {
    return {}
  },
  computed: {
    id() {
      return this.page
    },
    isTriggered() {
      return this.$store.getters.isTriggered
    },
  },
}
</script>

<style scoped lang="scss"></style>
