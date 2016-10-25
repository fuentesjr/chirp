import Vue from 'vue/dist/vue' // See: http://archive.forum.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Follow from './follow' // Import route components
import store from './store'
import ActivityStream from './activity-stream'

// Let module system know we will be using the Vue router
Vue.use(VueRouter)


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
const routes = [
  { path: '/follow/:username', component: Follow }
]

// 3. Create the router instance and pass the `routes` config
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router config to make the
// whole app router-aware.
const app = new Vue({
  components: {
    'activity-stream': ActivityStream
  },
  router,
  store
}).$mount('#app')
