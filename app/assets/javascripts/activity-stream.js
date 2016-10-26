const ActivityStream = {
  template: `
    <div id="activity-stream" class="text-mute">
      <h4>Activity Stream</h4>
      <div>
        <span class="as-item" v-for="follow in activityStream" v-follow-link="follow">
        </span>
      </div>
    </div>
  `,
  directives: {
    followLink: {
      update(el, binding, vnode) {
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
