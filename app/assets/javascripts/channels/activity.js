import store from '../store'
import App from '../cable'

App.activiy = App.cable.subscriptions.create("ActivityChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("[ActivityChannel] connected!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("[ActivityChannel] data received", data.follow)
    store.commit('newfollow', data.follow)
  }
});
