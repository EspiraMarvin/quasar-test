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
    }
  }
}

export default commonMixins
