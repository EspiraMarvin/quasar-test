<template>
  <div class="row">
    <div>{{taskSummary}}</div>
    <q-space />
    <span> Show:
                      <q-expansion-item dense dense-toggle class="q-ml-lg" label="This week" style="margin-top: -25px;color: #109CF1">
                        <q-item dense exact clickable><span class="text-caption">This Month</span></q-item>
                        <q-item dense exact clickable><span class="text-caption">This Year</span></q-item>
                      </q-expansion-item>
    </span>
  </div>

</template>

<script>
export default {
  name: 'TaxSummary',
  data () {
    return {
      taskSummary: '8 tasks completed out of 10'
    }
  }
}
</script>

<style scoped>

</style>
