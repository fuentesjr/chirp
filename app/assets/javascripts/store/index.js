import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activityData: [],
    activityDataSize: 8
  },
  mutations: {
    newfollow(state, follow) {
      if ( state.activityData.length >= state.activityDataSize ) {
        state.activityData.shift()
      }
      state.activityData.push(follow)
    }
  }
})

export default store
