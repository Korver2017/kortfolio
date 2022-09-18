<template>
  <Wrapper page="collection">
    <div class="my-auto mx-2">
      <h2 class="text-primary mb-5">Works Collection</h2>
      <div class="container">
        <div class="cardWrap d-flex flex-row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <img
                class="card-img-top"
                src="@/assets/images/konstructor.png"
                alt="Card image cap"
              />
              <div class="card-body pb-0">
                <h4 class="card-title">Konstructor</h4>
                <p class="card-text">
                  Vue 3 / Pinia / Vite / Vue Router<br />
                  Bootstrap 5<br />
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
          </div>
          <div class="col-md-6 mb-4">
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
                  Bootstrap / CSS Animation<br />
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
      </div>
    </div>
  </Wrapper>
</template>

<script>
export default {
  name: 'collection',
  head: {
    title: 'Collection',
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
}
</script>

<style scoped></style>
