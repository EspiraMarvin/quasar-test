<template>
  <q-page class="q-pa-md">
    <div class="row col-xs-12">
      <div class="col-sm-7 col-xs-12 q-pa-sm q-ma-md">

        <TaskList />

      </div>

      <!--      right panel with Closed deals and tasks -->
      <div class="col-sm-4 col-xs-12 q-pa-sm q-ma-md">
        <!--        Closed deals -->
        <q-card class="my-card q-mb-xl">
          <q-card-section class="">
            <div class="row">
              <div>Deals</div>
              <q-space />
              <span>Show:
                  <q-expansion-item dense class="q-ml-lg" dense-toggle label="Monthly" style="margin-top: -25px;color: #109CF1">
                    <q-item dense exact clickable><span class="text-caption">Monthly</span></q-item>
                    <q-item dense exact clickable><span class="text-caption">Yearly</span></q-item>
                  </q-expansion-item>
                </span>
            </div>
          </q-card-section>
          <q-separator />

          <!--  line graph component-->
          <div style="max-width: 500px">
            <LineGraph />
          </div>

        </q-card>

        <!--  Tasks pie chart -->

        <q-card class="my-card">
          <q-card-section class="col-12 q-pa-md">
            <div class="row">
              <div>Tasks</div>
              <q-space />
              <span>Show:
                  <q-expansion-item dense class="q-ml-lg" dense-toggle label="Monthly" style="margin-top: -25px;color: #109CF1">
                    <q-item dense exact clickable><span class="text-caption">Weekly</span></q-item>
                    <q-item dense exact clickable><span class="text-caption">Yearly</span></q-item>
                  </q-expansion-item>
                </span>
            </div>
          </q-card-section>
          <q-separator />

          <!--  apex donut component  -->
          <ApexDonut />

        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
import TaskList from '../components/TaskList'
import LineGraph from '../components/LineGraph'
import ApexDonut from '../components/ApexDonut'
export default {
  name: 'Dashboard',
  components: { TaskList, LineGraph, ApexDonut },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
