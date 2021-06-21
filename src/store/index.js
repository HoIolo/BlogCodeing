import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: 0
  },
  getters: {
    getWindowWidth(state) {
      return state.windowWidth
    }
  },
  mutations: {
    setWindowWidth(state,value) {
      state.windowWidth = value
    }
  },
  actions: {
  },
  modules: {
  }
})
