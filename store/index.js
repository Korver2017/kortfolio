export const state = () => ({
  isTriggered: false,
  isDarkMode: false,
})

export const mutations = {
  handleTriggerAnimation(state) {
    state.isTriggered = true
  },
  handleToggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode
  },
}

export const actions = {
  triggerAnimation({ commit }) {
    setTimeout(() => {
      commit('handleTriggerAnimation', true)
    }, 300)
  },
  toggleDarkMode({ commit }) {
    commit('handleToggleDarkMode', !state.isDarkMode)
  },
}

export const getters = {
  isTriggered(state) {
    return state.isTriggered
  },
  isDarkMode(state) {
    return state.isDarkMode
  },
}
