<template>
  <q-page class="q-pa-sm q-pt-md">
    <div class="row col-xs-12 q-gutter-md" style="width: 100%">

      <!--      left panel with user tasks details -->
        <TaskDetails class="col-xs-12 col-sm-7 col-md-7 q-pa-xs" />
      <!--    end of left panel with user tasks details -->

      <!--      right panel with Closed deals and tasks -->
      <div class="col-xs-12 col-sm-4 col-md-4 q-pa-xs">
        <!--        Closed deals -->
        <q-card class="my-card q-mb-md">
          <q-card-section class="q-pa-sm">
            <div class="row">
              <div>Deals</div>
              <q-space />
              <span>Show:
                <div>
                  <q-expansion-item dense class="q-ml-lg" dense-toggle label="Monthly" style="margin-top: -25px;color: #109CF1">
                    <q-item dense exact clickable><span class="text-caption drp-item">Yearly</span></q-item>
                  </q-expansion-item>
                </div>
                </span>
            </div>
          </q-card-section>
          <q-separator />

          <!--  line graph component-->
            <LineGraph />

        </q-card>

        <!--  Tasks pie chart -->

        <q-card class="my-card q-mb-md">
          <q-card-section class="col-12 q-pa-sm">
            <div class="row">
              <div>Tasks</div>
              <q-space />
              <span>Show:
                  <q-expansion-item dense class="q-ml-lg" dense-toggle label="Monthly" style="margin-top: -25px;color: #109CF1">
                    <q-item dense exact clickable><span class="text-caption drp-item">Yearly</span></q-item>
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
import TaskDetails from '../components/dashboard/Task/TaskDetails'
import LineGraph from '../components/dashboard/LineGraph'
import ApexDonut from '../components/dashboard/ApexDonut'
export default {
  name: 'Dashboard',
  components: {
    TaskDetails,
    LineGraph,
    ApexDonut
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .drp-item {
    font-size: 14px;
  }
</style>
