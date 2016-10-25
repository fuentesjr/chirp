const ActivityStream = {
  template: `
    <div id="activity-stream" class="text-mute">
      <h4>Activity Stream</h4>
      <div>
        <span class="as-item" v-for="follow in activityStream">
          <span v-link="follow"></span>
        </span>
      </div>
    </div>
  `,
  directives: {
    link: {
      bind(el, binding, vnode) {
        let username = binding.value
        el.innerHTML = `<a href="/#/follow/${username}">${username}</a>`
      }
    }
  },
  computed: {
    activityStream() {
      let streamSnapshot = this.$store.state.activityData
      //console.log("streamSnap", streamSnapshot)
      return streamSnapshot
    }
  }
}

export default ActivityStream
