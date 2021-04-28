const commonMixins = {
  // common reusable functions
  data () {
    return {
    }
  },
  methods: {
    // email validation
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid email'
    },

    // function generates random date between two dates
    randomDate (start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    },

    // check for white spaces (empty fields) in input fields
    hasWhiteSpacesOnly (val) {
      return val.replace(/\s/g, '').length || 'field is empty'
    },

    // notification plugin for messages
    notify (message, type) {
      this.$q.notify({
        message: message,
        position: 'top',
        color: type,
        icon: 'announcement'
      })
    },

    confirm () {
      this.$q.dialog({
        title: 'Confirm',
        message: "Are you sure you want to proceed. This can't be undone?",
        cancel: true,
        persistent: true
      }).onOk(() => {
        // delete item
        this.proceedDelete()
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}

export default commonMixins
