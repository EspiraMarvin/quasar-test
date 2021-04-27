<template>
  <div>
    <q-card class="details-card">
    <q-card-section class="q-pa-md">

      <TaxSummary />

      <TaskProgress />

      <Calendar />

    <q-separator />
      <q-scroll-area
        style="height: 490px"
        :thumb-style="thumbStyle"
      >
        <q-card-section class="q-pa-xs">
            <TasksList />
        </q-card-section>
      </q-scroll-area>
    </q-card-section>

  </q-card>
  </div>
</template>

<script>
import TaxSummary from './TaxSummary'
import TaskProgress from './TaskProgress'
import Calendar from './Calendar'
import TasksList from './TasksList'
export default {
  name: 'TaskDetails',
  components: { TasksList, Calendar, TaskProgress, TaxSummary },
  data () {
    return {
      thumbStyle: {
        right: '1px',
        backgroundColor: 'grey',
        width: '2.8px',
        opacity: 0.3
      }
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
