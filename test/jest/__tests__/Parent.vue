<template>
  <div>
    <Child @displayOtherUserTask="onDisplayOtherUserTask" />
    <p v-if="showMore">showMoreUserTasks!</p>
    <button @click="clickParent">Click me</button>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  components: { Child },
  data () {
    return {
      showMore: false,
      parentClicked: false
    }
  },
  methods: {
    onDisplayOtherUserTask () {
      this.showMore = false
    },
    clickParent () {
      this.parentClicked = true
    }
  }
}
</script>

<style scoped>

</style>
