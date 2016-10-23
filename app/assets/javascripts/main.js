// Let module system know we will be using the Vue router
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Follow = {
  template: `
    <div>
      <input type="text" placeholder="@username"
             v-on:keyup.enter="nav" v-model="username"/>
      <hr>
      <div v-for="tweet in tweets">
        <div>
          <b v-format-date="tweet.created_at"></b>
          <span v-follow-links="tweet.text"></span>
        </div>
      </div>
     </div>
  `,
  directives: {
    formatDate(el, binding) {
      let date = moment(Date.parse(binding.value)).fromNow();
      el.innerText = date;
    },
    followLinks: {
      bind(el, binding, vnode) {
        let text = binding.value
        let regex = /.*(@\w+).*/
        let findFollowRefs = regex.exec(binding.value)
        if ( findFollowRefs && findFollowRefs[1] ) {
          let followRef =  findFollowRefs[1]
          let followLink = `<a href="/#/follow/${followRef}">${followRef}</a>`

          text = text.replace(new RegExp(followRef, 'g'), followLink)
        }
        el.innerHTML = text
      }
    }
  },
  data() {
    return {
      username: "@fuentesjr",
      tweets: [],
      errors: null
    }
  },
  methods: {
    nav() {
      this.$router.push(`/follow/${this.username}`);
    },
    fetchTweets() {
      let fetch_endpoint = `/tweets/${this.username}`
      this.tweets = []
      this.$http.get(fetch_endpoint).then(
        (response) => {
          this.tweets = response.data;
        },
        (response) => {
          this.errors = response.data.errors
        }
      ).bind(this);
    }
  },
  mounted() {
    this.username = this.$route.params.username;
    this.fetchTweets();
  },
  watch: {
    '$route' (to, from) {
      this.username = this.$route.params.username;
      this.fetchTweets();
    }
  },
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/follow/:username', component: Follow }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
