<template>
  <Wrapper page="contact">
    <div class="my-auto mx-2">
      <h2 class="text-primary mb-5">Contact Me</h2>
      <div class="card-wrap d-flex">
        <div class="name-card mt-2">
          <div class="info py-5 px-5">
            <div class="avatar mb-4"></div>
            <h4>Korver<br /><span>Front-End Engineer</span></h4>
            <p>E-mail: korver2017@gmail.com</p>
            <span class="icon-links">
              <ul>
                <li class="github">
                  <a href="https://github.com/Korver2017" target="_blank"
                    ><i class="fab fa-github" aria-hidden="true"></i
                  ></a>
                </li>
                <li class="linkedin mx-3">
                  <a
                    href="https://www.linkedin.com/in/korver2017/"
                    target="_blank"
                    ><i class="fab fa-linkedin-in" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
</template>

<script>
export default {
  name: 'contact',
  head: {
    title: 'Contact',
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
}
</script>

<style scoped></style>
