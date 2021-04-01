<template>
  <div>
  <transition>
    <p v-if="show">username</p>
    <button @click="para">THIS IS IT</button>

    <div>
      <button class="ok" @click="callOk">Yes</button>
      <button class="cancel" @click="callCancel">Cancel</button>
    </div>
  </transition>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'User',
  // eslint-disable-next-line vue/no-unused-components
  components: { Button },
  props: {
    callMe: {
      type: Function
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    para () {
      console.log('clicked')
    },
    callOk () {
      this.callMe('ok')
    },
    callCancel () {
      this.callMe('cancel')
    }
  }
}
</script>

<style scoped>

</style>
