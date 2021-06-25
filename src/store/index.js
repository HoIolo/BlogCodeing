import { createStore } from 'vuex'

export default createStore({
  state: {
    windowWidth: 0,
    scrollTop: 0,
    backTop: {
      type:Function,
      defalut() {
        return null;
      }
    }
  },
  getters: {
    getWindowWidth(state) {
      return state.windowWidth
    },
    getScrollTop(state) {
      return state.scrollTop
    },
    getBackTop(state) {
      return state.backTop
    }
  },
  mutations: {
    setWindowWidth(state,value) {
      state.windowWidth = value
    },
    setScrollTop(state,value) {
      state.scrollTop = value
    },
    setBackTop(state,value) {
      state.backTop = value
    }
  },
  actions: {
  },
  modules: {
  }
})
