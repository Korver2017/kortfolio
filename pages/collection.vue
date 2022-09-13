<template>
  <!-- Main content -->
  <div class="main container-fluid ml-3 p-0">
    <!-- Works collection -->
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      :class="{ display: isTriggered }"
      id="collection"
    >
      <div class="my-auto mx-2">
        <h2 class="text-primary mb-5">Works Collection</h2>
        <div class="cardWrap d-flex flex-row">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/images/konstructor.png"
              alt="Card image cap"
            />
            <div class="card-body pb-0">
              <h4 class="card-title">Konstructor</h4>
              <p class="card-text">
                Vue 3 / Pinia / Vue Router<br />
                Vite / Bootstrap 5<br />
              </p>
            </div>
            <div class="card-body pt-3 pb-4">
              <a
                href="https://github.com/Korver2017/konstructor"
                class="btn btn-outline-primary mr-1"
                target="_blank"
                >GitHub</a
              >
              <a
                href="https://korver2017.github.io/konstructor/"
                class="btn btn-outline-primary"
                target="_blank"
                >Website</a
              >
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/images/portfolio.png"
              alt="Card image cap"
            />
            <div class="card-body pb-0">
              <h4 class="card-title">Kortfolio</h4>
              <p class="card-text">
                Nuxt / Vue<br />
                Bootstrap / CSS Transition<br />
              </p>
            </div>
            <div class="card-body pt-3 pb-4">
              <a
                href="https://github.com/Korver2017/kortfolio"
                class="btn btn-outline-primary"
                target="_blank"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'collection',
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

<style scoped></style>
