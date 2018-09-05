import Vue from 'vue/dist/vue'
import VueResource from'vue-resource'
Vue.use(VueResource)


const Follow = {
  template: `
    <div class="container">
      <input type="text" placeholder="@username"
             v-on:keyup.enter="nav" v-model="username" title="(Press Enter)"/>
      <hr>
      <div v-for="tweet in tweets">
        <div id="tweetbox-shadow" class="well well-sm">
          <b v-format-date="tweet.created_at"></b>
          <span v-follow-links="tweet.text"></span>
        </div>
      </div>
     </div>
  `,
  directives: {
    formatDate(el, binding) {
      let date = moment(Date.parse(binding.value)).fromNow()
      el.innerText = date
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
      username: "@vuejs",
      tweets: [],
      errors: null
    }
  },
  methods: {
    nav() {
      this.$router.push(`/follow/${this.username}`)
    },
    fetchTweets() {
      let fetch_endpoint = `/tweets/${this.username}`
      this.tweets = []
      this.$http.get(fetch_endpoint).then(
        (response) => {
          this.tweets = response.data
        },
        (response) => {
          this.errors = response.data.errors
        }
      ).bind(this)
    }
  },
  mounted() {
    this.username = this.$route.params.username
    this.fetchTweets()
  },
  watch: {
    '$route' (to, from) {
      this.username = this.$route.params.username
      this.fetchTweets()
    }
  },
}

export default Follow
