<template>
  <q-page class="q-pa-md">
    <div class="row col-xs-12">
      <div class="col-sm-7 col-xs-12 q-pa-sm q-ma-md">
        <q-card class="my-card">
          <q-card-section class="q-pa-md">
              <div class="row">
                <div>8 tasks completed out of 10</div>
                <q-space />
                    <span> Show:
                      <q-expansion-item dense dense-toggle class="q-ml-lg" label="This week" style="margin-top: -25px;color: #109CF1">
                        <q-item dense exact clickable><span class="text-caption">This Month</span></q-item>
                        <q-item dense exact clickable><span class="text-caption">This Year</span></q-item>
                      </q-expansion-item>
                    </span>
              </div>

              <div class="row">
                <div class="col-sm-12 col-xs-10">
                  <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />
                </div>
              </div>
              <div class="text-overline q-mt-sm q-mb-xs">{{ currentDate }}</div>
              <div class="q-ma-sm">
                <ul class="row justify-between flex-container-week-days">
                  <li class="flex-item"
                      v-for="day in customdays"
                      :key="day.id"
                      @click="active_id=day.id"
                  >
                    <p
                      :style="day.class ? 'color: #109CF1; border-radius: 50%' : 'background-color-green'"
                    >
                      {{day.day}}
                    </p>
                    <p
                      :style="day.class ? 'background-color: #109CF1; color: white; border-radius: 50%;' : ''"
                    >
                      {{day.date}}
                    </p>

                  </li>
                </ul>
              </div>
          </q-card-section>


          <q-separator />

          <q-card-section>
            <q-card-section class="q-pa-sm">

              <q-card
                class="my-card"
                v-for="task in limitTask"
                :key="task.id"
              >
                <q-card-section class="text-black">
                  <div class="row">
                    <div class="text-subtitle1 text-weight-medium">{{task.title}}</div>
                    <q-space />
                    <span class="text-grey-7 card-text-caption" style="font-size: 12px">{{task.tag}}</span>
                  </div>
                  <div class="text-subtitle2 text-weight-light text-grey">Due date: <span class="text-weight-light text-black">{{moment(task.dueDate).format('LL')}}</span></div>
                </q-card-section>
                <q-card-section class="q-mb-sm row user-task">
                    <q-item>
                      <q-item-section avatar>
                        <q-avatar
                          size="26px"
                        >
                          <img :src="task.assignee.avatar">
                        </q-avatar>
                      </q-item-section>
                      <span class="text-weight-regular text-grey-7 card-text-caption">{{task.assignee.fullName}}</span>
                    </q-item>

                  <q-space />

                  <template v-if="task.status === 'Completed'">
                    <div class="col-xs-12 col-sm-6 q-mt-md">
                      <q-btn size="sm" class="bg-secondary float-right text-white text-capitalize" flat>Completed</q-btn>
                    </div>
                  </template>
                  <template v-else-if="task.status === 'Ended'">
                    <div class="col-xs-12 col-sm-6 q-mt-md">
                      <q-btn size="sm" class="bg-negative float-right text-white text-capitalize" flat>Ended</q-btn>
                      <q-icon @click="deleteUserTask(task.id)" name="delete" class="q-mr-lg float-right" color="accent" size="sm" />
                      <q-icon @click="editUserTask(task)"  name="edit" class="q-mr-lg float-right" color="accent" size="sm" />
                    </div>
                  </template>
                  <template v-else-if="task.status === 'Active'">
                    <div class="col-xs-12 col-sm-6 q-mt-md">
                      <q-btn size="sm" class="bg-warning float-right text-white text-capitalize" flat>Active</q-btn>
                    </div>
                  </template>
                </q-card-section>

              </q-card>
              <q-btn
                @click="hide"
                v-if="showMore"
                flat style="color: #109CF1; margin-left: 35%" size="md" class="text-lowercase" label="show more" />
            </q-card-section>
          </q-card-section>

          <q-card-actions>
          </q-card-actions>
        </q-card>

        <q-dialog v-model="openDialog">
          <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
              <q-toolbar>
                <q-toolbar-title> Edit User Task</q-toolbar-title>
              </q-toolbar>
              <q-form ref="addUserForm">
                <div class="row">
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.title"
                      label="Title *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input standard v-model="form.dueDate" mask="date" label="Due Date" :rules="['date']">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="form.dueDate">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-select
                    :options="options"
                    option-value="id"
                    option-label="name"
                    emit-value
                    map-options
                    v-model="form.user_id"
                    label="Associated with"
                    type="text" lazy-rules
                  >
                    <template v-slot:before="scope">
                      <q-avatar>
                        <img ref="avatarImg" src="https://cdn.quasar.dev/img/avatar5.jpg">
                      </q-avatar>
                    </template>
                    <template v-slot:option="scope">
                      <q-item
                        v-bind="scope.itemProps"
                        v-on="scope.itemEvents"
                      >
                        <q-item-section avatar>
                          <q-avatar>
                            <img :src="scope.opt.avatar"/>
                          </q-avatar>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label v-html="scope.opt.name"></q-item-label>
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-select
                    :options="tags"
                    option-value="name"
                    option-label="name"
                    emit-value
                    map-options
                    v-model="form.tag"
                    label="Tag *"
                    type="text"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || 'Please enter tag']"
                  >
                  </q-select>
                </div>
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-select
                    :options="status"
                    option-value="name"
                    option-label="name"
                    emit-value
                    map-options
                    v-model="form.status"
                    label="Status *"
                    type="text"
                    lazy-rules
                    :rules="[val => (val && val.length > 0) || 'Please enter status']"
                   >
                  </q-select>
                </div>
              </q-form>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn color="info" class="q-pl-md q-pr-md" outline label="Cancel" @click="closeDialog" />
              <q-btn
                label="Save"
                @click="btnSave"
                outline5
                color="primary"
                class="q-pl-md q-pr-md"
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

<!--      right panel with Closed deals and tasks -->
      <div class="col-sm-4 col-xs-12 q-pa-sm q-ma-md">
<!--        Closed deals -->
        <q-card class="my-card q-mb-xl">
          <q-card-section class="col-12 q-pa-md">
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

<!--            line graph component-->

          <LineGraph />

        </q-card>


<!--       Tasks pie chart -->

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

<!--          apex donut component  -->
          <ApexDonut />

        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
  const moment = require('moment')
  import commonMixins from '../mixins/commonMixins'
  import { getTasks, getUsers, getDays, getTags, getStatus, getDeals} from '../Config/data.js'
  import LineGraph from '../components/LineGraph'
  import ApexDonut from '../components/ApexDonut'
  import { cloneDeep } from 'lodash'
  export default {
  name: 'Dashboard',
    components: { LineGraph, ApexDonut },
    mixins: [commonMixins],
  data (){
    return {
      // form data
      form: {
        title: '',
        dueDate: '',
        user_id: '',
        tag: '',
        status: ''
      },
      optionss: {},
      series: [44, 55, 41, 17, 15],
      editId: null,
      progress: 0.8,
      currentDate: '23 December, Sunday',
      options: getUsers,
      active_id: 1,
      tasks: getTasks,
      tags: getTags,
      status: getStatus,
      days: getDays,
      moment: moment,
      limit: 3,
      showMore: true,
      openDialog: false,
      sections: [
        { label: 'Red section', value: 25, color: 'red' },
        { label: 'Green section', value: 25, color: 'green' },
        { label: 'Blue section', value: 25, color: 'blue' }
      ],
    }
  },
    methods: {
    hide () {
      this.limit = null
      this.showMore = false
    },
    deleteUserTask (id) {
      console.log('deleted', id)
      this.tasks = this.tasks.filter(task => task.id !== id)
      return this.notify('Task User Deleted Success !', 'red')
    },
    editUserTask (task) {
      this.openDialog = true
      let finalClone = cloneDeep(task)
      this.form.user_id = finalClone.assignee.user_id
      this.form.title = finalClone.title
      this.form.dueDate = finalClone.dueDate
      this.form.tag = finalClone.tag
      this.form.status = finalClone.status
      //object id to be used to edit
      this.editId = task.id
    },
    closeDialog () {
      this.openDialog = false
    },
    btnSave() {
      // find the index of this ID's object
      const objIndex = this.tasks.findIndex(obj => obj.id === this.editId)

      this.tasks[objIndex].title = this.form.title
      this.tasks[objIndex].dueDate = this.form.dueDate
      this.tasks[objIndex].assignee.user_id = this.form.user_id
      this.tasks[objIndex].tag = this.form.tag
      this.tasks[objIndex].status = this.form.status

      this.form = {}
      this.closeDialog()
      this.notify('Task User Updated Success !', 'secondary')
      }
  },
  computed: {
    limitTask(){
      return this.limit ? this.tasks.slice(0, this.limit) :  this.tasks
    },
    customdays(){
      return this.days.map(day=>{
        day.class= this.active_id===day.id?'active':''
        return day;
      })
    }
  }
}
</script>

<style scoped>
  .flex-container-week-days {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }
  .flex-container-week-dates li {
    border-radius: 50%;
    width: 20px;
    height: 20px
  }
  .card-text-caption{
    margin-left: -20px;
    margin-top: 5px
  }
  .user-task{
    margin-left: -10px;
    margin-top: -22px
  }
</style>
