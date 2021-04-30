<template>
      <q-linear-progress :value="progress" color="secondary" track-color="grey" class="q-mt-sm" />
</template>

<script>
export default {
  name: 'TaskProgress',
  data () {
    return {
      progress: 0.8
    }
  }
}
</script>

<style scoped>

</style>
