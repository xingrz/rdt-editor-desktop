import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  source: { from: null, source: localStorage.getItem('content') },
  selection: { from: null, start: 0, end: 0 }
}

const mutations = {
  SYNC (state, source) {
    state.source = source
  },
  SELECT (state, selection) {
    state.selection = selection
  }
}

const middlewares = [
  {
    onMutation (mutation, { source }) {
      localStorage.setItem('content', source.source)
    }
  }
]

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})
