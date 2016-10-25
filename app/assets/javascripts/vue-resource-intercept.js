import Vue from 'vue/dist/vue'
import VueResource from'vue-resource'

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-CSRF-Token', $('[name="csrf-token"]').attr('content'))
  next()
})
