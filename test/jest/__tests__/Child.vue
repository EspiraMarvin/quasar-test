<template>
    <div>Child Component
      <Button @click="me">Click me</Button>
    </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'Child',
  components: { Button },
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    me () {
      this.answer = 'hey'
    }
  }
}
</script>

<style scoped>

</style>
