Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-CSRF-Token', $('[name="csrf-token"]').attr('content'))
  next()
})
