<template>
  <div class="row">
    <div class="col-sm-12 col-xs-10">
      <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />
    </div>
  </div>
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
