<template>
  <div>
    <q-card class="my-card">
    <q-card-section class="q-pa-md">

      <TaxSummary />

      <TaskProgress />

      <Calendar />

    <q-separator />

      <q-card-section class="q-pa-sm">

        <TasksList />

      </q-card-section>
    </q-card-section>

  </q-card>
  </div>
</template>

<script>
import commonMixins from '../../../mixins/commonMixins'
import TaxSummary from './TaxSummary'
import TaskProgress from './TaskProgress'
import Calendar from './Calendar'
import TasksList from './TasksList'
export default {
  name: 'TaskDetails',
  components: { TasksList, Calendar, TaskProgress, TaxSummary },
  mixins: [commonMixins],
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
