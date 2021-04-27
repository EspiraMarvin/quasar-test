<template>
  <div class="q-mt-md">
    <transition-group
      appear
      enter-active-class="animated fadeIn slower"
    >
      <q-card
      v-for="task in limitTask"
      :key="task.id"
      @click="showActions(task)"
    >
        <q-card-section class="text-black">
          <div class="flex justify-between items-center">
            <span class="text-subtitle1 text-weight-medium">{{task.title}}</span>
            <span class="to-next-line text-grey-7 card-text-caption" style="font-size: 12px">{{task.tag}}</span>
          </div>
          <div class="text-subtitle2 text-weight-light text-grey">
            Due date: <span class="text-weight-light text-black">{{moment(task.dueDate).format('LL')}}</span>
          </div>
        </q-card-section>
        <q-card-section class="q-mb-sm user-task">
          <div class="flex no-wrap justify-between items-center">
            <div class="flex no-wrap">
              <q-item-section avatar>
                <q-avatar
                  size="26px"
                >
                  <img :src="task.assignee.avatar">
                </q-avatar>
              </q-item-section>
              <span class="text-weight-regular text-grey-7 card-text-caption">{{task.assignee.fullName}}</span>
            </div>
            <div class="to-next-line">
               <q-icon
                  v-if="editDetails"
                  @click="editUserTask(task)"
                  name="edit"
                  color="accent"
                  class="q-mr-sm"
                  size="20px"
                />
                <q-icon
                  v-if="editDetails"
                  @click="deleteUserTask(task.id)"
                  name="delete"
                  color="accent"
                  class="q-mr-sm delete-button"
                  size="20px"
                />
            </div>
            <div>
              <q-btn
                size="sm"
                flat
                :label="task.status"
                :class="task.status === 'Completed' ? 'bg-secondary': task.status === 'Ended' ? 'bg-negative': task.status === 'Active' ? 'bg-warning': ''"
                class="actions-button text-white text-capitalize"
              />
            </div>
          </div>

<!--          <div class="col-xs-12 col-sm-6 q-mt-md">-->

<!--            <q-btn size="sm" v-if="task.status === 'Completed'" class="bg-secondary float-right text-white text-capitalize" flat>{{ task.status }}</q-btn>-->
<!--            <q-btn size="sm" v-if="task.status === 'Ended'" class="bg-negative float-right text-white text-capitalize" flat>{{ task.status }}</q-btn>-->
<!--            <div>-->
<!--              <q-icon @click="deleteUserTask(task.id)" name="delete" class="q-mr-lg float-right" color="accent" size="sm" />-->
<!--              <q-icon @click="editUserTask(task)"  name="edit" class="q-mr-lg float-right" color="accent" size="sm" />-->
<!--            </div>-->
<!--            <q-btn size="sm" v-if="task.status === 'Active'" class="bg-warning float-right text-white text-capitalize" flat>{{ task.status }}</q-btn>-->
<!--            <div>-->
<!--              <q-icon @click="deleteUserTask(task.id)" name="delete" class="q-mr-lg float-right" color="accent" size="sm" />-->
<!--              <q-icon @click="editUserTask(task)"  name="edit" class="q-mr-lg float-right" color="accent" size="sm" />-->
<!--            </div>-->
<!--          </div>-->

<!--
     <template v-if="task.status === 'Completed'">
            <div class="col-xs-12 col-sm-6 q-mt-md">
              <q-btn size="sm" class="bg-secondary float-right text-white text-capitalize" flat>Completed</q-btn>
            </div>
          </template>
          <template v-else-if="task.status === 'Ended'">
            <div class="col-xs-12 col-sm-6 q-mt-md">
              <q-btn size="sm" class="bg-negative float-right text-white text-capitalize" flat>Ended</q-btn>
              <div v-show="toggle">
                <q-icon @click="deleteUserTask(task.id)" name="delete" class="q-mr-lg float-right" color="accent" size="sm" />
                <q-icon @click="editUserTask(task)"  name="edit" class="q-mr-lg float-right" color="accent" size="sm" />
              </div>
            </div>
          </template>
          <template v-else-if="task.status === 'Active'">
            <div class="col-xs-12 col-sm-6 q-mt-md">
              <q-btn size="sm" class="bg-warning float-right text-white text-capitalize" flat>Active</q-btn>
            </div>
          </template>
-->
        </q-card-section>
      </q-card>
    </transition-group>
      <q-btn
        @click="hide"
        v-if="showMore"
        flat style="color: #109CF1; margin-left: 35%" size="md" class="text-lowercase" label="show more"
      />

    <q-dialog v-model="openDialog">
      <TaskEditDialog :users="users" :tags="tags" :status="status" :tasks="tasks" :taskToEdit="taskToEdit" :closeDialog="closeDialog"/>
    </q-dialog>

  </div>
</template>

<script>
const moment = require('moment')
import TaskEditDialog from './TaskEditDialog'
import commonMixins from '../../../mixins/commonMixins'
import { getTasks, getStatus, getTags, getUsers } from 'src/Config/data'
export default {
  name: 'TasksList',
  components: { TaskEditDialog },
  mixins: [commonMixins],
  data () {
    return {
      tasks: getTasks,
      status: getStatus,
      tags: getTags,
      users: getUsers,
      taskToEdit: {},
      showMore: true,
      limit: 3,
      moment: moment,
      openDialog: false,
      toggle: false,
      showActionsButtons: false,
      displayButtons: true,
      editDetails: true
    }
  },
  methods: {
    hide () {
      this.limit = null
      this.showMore = false
    },
    deleteUserTask (id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
      return this.notify('Task User Deleted Success !', 'red')
    },
    closeDialog () {
      this.openDialog = false
    },
    showActions (task) {
      this.editDetails = !this.editDetails
    },
    editUserTask (task) {
      this.openDialog = true
      this.taskToEdit = task
    }
  },
  computed: {
    limitTask () {
      return this.limit ? this.tasks.slice(0, this.limit) : this.tasks
    },
    tasksButtonClass () {
      return {
        Completed: this.tasks
      }
    }
  }
}
</script>

<style scoped>
  .card-text-caption {
    margin-left: -20px;
    margin-top: 5px
  }
  .user-task {
    /*margin-left: -10px;*/
    margin-top: -10px
  }
  .actions-button {
    width: 60px;
    height: 25px;
    /*float: right!important;*/
  }
  .edit-button {
    /*margin-right: -30px;*/
  }
  .delete-button {
    /*margin-right: -30px;*/
  }
  .to-next-line {
    margin-left: auto;
  }
</style>
