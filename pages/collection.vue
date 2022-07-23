<template>
  <!-- Main content -->
  <div class="main container-fluid ml-5 p-0">
    <!-- Works collection -->
    <section
      class="resume-section p-3 p-lg-5 d-flex flex-column"
      :class="{ display: isTriggered }"
      id="collection"
    >
      <div class="my-auto">
        <h2 class="text-primary mb-5">Works Collection</h2>

        <div class="cardWrap d-flex flex-row">
          <div class="card col-lg-3 col-12">
            <img
              class="card-img-top mt-2"
              height="139"
              src="@/assets/images/countdown.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Vue.js Countdown Component</h4>
              <h5>By Wrapping Up jQuery Plugin</h5>

              <br />
              <p class="card-text">
                Vue.js<br />
                Component Management<br />
                Props & Custom Event<br />
                UI Layout
              </p>
            </div>
            <div class="card-body">
              <a
                href="https://korver2017.github.io/vuejs-countdown-component/"
                class="btn btn-outline-primary mb-2"
                target="_blank"
                >Visit Website</a
              ><br />
              <a
                href="https://github.com/Korver2017/vuejs-countdown-component"
                class="btn btn-outline-primary"
                target="_blank"
                >GitHub Repo</a
              >
            </div>
          </div>

          <div class="card col-lg-3 col-12">
            <img
              class="card-img-top mt-2"
              src="@/assets/images/portfolio.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Korver Portfolio</h4>
              <p class="card-text">
                Parallax Scrolling<br />
                Animation & Interaction<br />
                jQuery<br />
                CSS Transition
              </p>
            </div>
            <div class="card-body">
              <a
                href="https://github.com/Korver2017/bootstrap4-portfolio"
                class="btn btn-outline-primary"
                target="_blank"
                >GitHub Repo</a
              >
            </div>
          </div>

          <div class="card col-lg-3 col-12">
            <img
              class="card-img-top mt-2"
              src="@/assets/images/toilet-map.png"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">Hualien City Public Toilet Map</h4>
              <p class="card-text">Google Maps API</p>
            </div>
            <div class="card-body">
              <a
                href="https://korver2017.github.io/hualien-city-public-toilet-map/"
                class="btn btn-outline-primary mb-2"
                target="_blank"
                >Visit Website</a
              ><br />
              <a
                href="https://github.com/Korver2017/hualien-city-public-toilet-map"
                class="btn btn-outline-primary"
                target="_blank"
                >GitHub Repo</a
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
