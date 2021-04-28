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
            Due date: <span class="text-weight-light text-black">{{ moment(task.dueDate).format('LL') }}</span>
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
            <div  v-if="actionsButtons === true && tasksActionsId ===  task.id" class="to-next-line">
              <q-icon @click="editUserTask(task)" name="edit" color="accent" class="q-mr-sm" size="20px"/>
              <q-icon @click="deleteUserTask(task.id)" name="delete" color="accent" class="q-mr-sm" size="20px"/>
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
        </q-card-section>
      </q-card>
    </transition-group>
    <div class="flex flex-center">
      <q-btn
        @click="hide"
        v-if="showMore"
        flat style="color: #109CF1" size="md" class="text-lowercase" label="show more"
      />
    </div>

    <q-dialog v-model="openDialog">
      <TaskEditDialog :users="users" :tags="tags" :status="status" :tasks="tasks" :taskToEdit="taskToEdit" :closeDialog="closeDialog"/>
    </q-dialog>

    <q-dialog persistent v-model="confirmDelete" transition-show="fadeIn" transition-hide="fadeOut">
      <DeleteDialog :deleteWarningDetails="deleteWarningDetails" :proceedDelete="proceedDelete" />
    </q-dialog>

  </div>
</template>

<script>
import DeleteDialog from '../../globals/DeletePrompt'
const moment = require('moment')
import TaskEditDialog from './TaskEditDialog'
import commonMixins from '../../../mixins/commonMixins'
import { getTasks, getStatus, getTags, getUsers } from 'src/Config/data'
export default {
  name: 'TasksList',
  components: { DeleteDialog, TaskEditDialog },
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
      actionsButtons: false,
      taskIDToBeDelete: null,
      tasksActionsId: null,
      confirmDelete: false,
      deleteWarningDetails: []
    }
  },
  methods: {
    hide () {
      this.limit = null
      this.showMore = false
    },
    deleteUserTask (id) {
      this.taskIDToBeDelete = id
      this.confirmDelete = true
      this.deleteWarningDetails[0] = 'Delete User Task?'
      this.deleteWarningDetails[1] = "Are you sure you want to proceed. This can't be undone"
    },
    proceedDelete () {
      this.confirmDelete = false
      this.tasks = this.tasks.filter(task => task.id !== this.taskIDToBeDelete)
      return this.notify('Task User Deleted Success !', 'red')
    },
    closeDialog () {
      this.openDialog = false
    },
    showActions (task) {
      if (task) {
        this.tasksActionsId = task.id
        this.actionsButtons = true
      }
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
    margin-top: -10px
  }
  .actions-button {
    width: 60px;
    height: 25px;
  }
  .to-next-line {
    margin-left: auto;
  }
</style>
