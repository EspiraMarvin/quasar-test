const commonMixins = {
  // notification plugin for messages

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
    notify (message, type) {
      this.$q.notify({
        message: message,
        position: 'top',
        color: type,
        icon: 'announcement'
      })
    },

    alert () {
      this.$q.dialog({
        title: 'Alert',
        message: 'Are you Sure you want to delete'
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    confirm () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to turn on the wifi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    },

    prompt () {
      this.$q.dialog({
        title: 'Prompt',
        message: 'What is your name?',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        // console.log('>>>> OK, received', data)
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}

export default commonMixins
