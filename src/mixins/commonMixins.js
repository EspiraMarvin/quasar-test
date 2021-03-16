const commonMixins = {
  // notification plugin for messages

  methods: {
    notify (message, type) {
      this.$q.notify({
        message: message,
        position: 'top',
        color: type,
        icon: 'announcement'
      })
    },
    // email validation
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid email'
    }
  }
}

export default commonMixins
