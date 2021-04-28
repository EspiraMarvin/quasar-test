<template>
  <div class="flex justify-between">
    <div>{{taskSummary}}</div>
    <span> Show:
      <q-expansion-item dense dense-toggle class="q-ml-lg expansion-item" label="This week">
        <q-item dense exact clickable><span class="text-caption drp-item">This Month</span></q-item>
        <q-item dense exact clickable><span class="text-caption drp-item">This Year</span></q-item>
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
  .drp-item {
    font-size: 14px;
  }
  .expansion-item{
    margin-top: -25px;
    color: #109CF1;
  }
</style>
