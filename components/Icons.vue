<template>
  <div>
    <!-- Skill icons -->
    <div
      v-for="icons in iconsGroups"
      :key="`icons-${icons[0]}`"
      class="icons-group"
    >
      <span
        v-for="icon in icons"
        :key="icon"
        class="iconify my-3"
        :data-icon="`logos:${icon}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'icons',
  data() {
    return {
      iconsGroups: [
        ['vue', 'vitejs', 'nuxt-icon', 'javascript'],
        ['sass', 'bootstrap', 'html-5', 'css-3'],
        [
          'git-icon',
          'github-icon',
          'gitlab',
          'sourcetree',
          'gulp',
          'slack-icon',
        ],
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.iconify {
  font-size: 3.3rem;
  margin-right: 8px;
  margin-left: 8px;
  &:hover {
    transform: translateY(-5px);
  }
}
</style>
