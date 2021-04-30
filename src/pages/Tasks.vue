<template>
  <div>
    <h4 class="text-h6 text-center">Tasks</h4>
    <p class="text-center" v-if="this.$route.params.id">Tasks {{this.$route.params.id}}</p>

    <q-list class="q-pa-sm q-mx-xs">
      <q-card
        v-for="task in tasks"
        :key="task.id"
        v-ripple
        class="q-mb-xs"
      >
        <q-card-section>
          <div class="row no-wrap items-center" style="height:10.5px">
            <div class="col ellipsis row">&nbsp;
                  &nbsp;<span>{{ task.title }} </span>
            </div>
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
    </q-list>
  </div>
</template>

<script>
import { getTasks } from '../Config/data.js'
export default {
  name: 'Tasks',
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    filterTasks () {
      if (!this.$route.params.id) {
        this.tasks = getTasks
        return
      }
      this.tasks = getTasks.filter(task => {
        return task.status === this.$route.params.id
      })
    }
  },
  mounted () {
    this.filterTasks()
  },
  watch: {
    '$route.params.id': {
      handler () {
        this.filterTasks()
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
