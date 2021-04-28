<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <q-toolbar>
        <q-toolbar-title> Edit User Task</q-toolbar-title>
      </q-toolbar>
      <ErrorMessage :errorMessage="errorMessage" />
      <q-form ref="form">
        <div class="row">
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="form.title"
              placeholder="Title *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter name', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input standard v-model="form.dueDate" mask="date" placeholder="Due Date" lazy-rules :rules="[val => (val && val.length > 0) || 'Enter Due Date', hasWhiteSpacesOnly]">
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
            :options="users"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            v-model="form.user_id"
            placeholder="Associated with"
            type="text" lazy-rules
          >
            <template v-slot:before>
              <q-avatar>
                <img ref="avatarImg" :src="form.avatar">
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
            placeholder="Tag *"
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
            placeholder="Status *"
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
        color="primary"
        class="q-pl-md q-pr-md"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import commonMixins from '../../../mixins/commonMixins'
import { cloneDeep } from 'lodash'
import ErrorMessage from '../../globals/ErrorMessage'
export default {
  name: 'TaskEdit',
  components: { ErrorMessage },
  mixins: [commonMixins],
  props: {
    users: { type: Array, required: true },
    tasks: { type: Array, required: true },
    status: { type: Array, required: true },
    tags: { type: Array, required: true },
    closeDialog: { type: Function, required: true },
    taskToEdit: { type: Object, required: true }
  },
  mounted () {
    const finalClone = cloneDeep(this.taskToEdit)
    this.form.user_id = finalClone.assignee.user_id
    this.form.avatar = finalClone.assignee.avatar
    this.form.title = finalClone.title
    this.form.dueDate = finalClone.dueDate
    this.form.tag = finalClone.tag
    this.form.status = finalClone.status
    // object id to be used to edit
    this.editId = this.taskToEdit.id
  },
  data () {
    return {
      form: {
        title: '',
        dueDate: '',
        user_id: '',
        avatar: '',
        tag: '',
        status: ''
      },
      taskId: '',
      editId: null,
      errorMessage: ''
    }
  },
  methods: {
    btnSave () {
      if (this.hasWhiteSpacesOnly(this.form.title && this.form.dueDate && this.form.user_id &&
        this.form.tag && this.form.status) === 'field is empty') {
        this.$refs.form.focus()
        this.errorMessage = 'All Fields Are Required !'
        return
      }
      // find the index of this ID's object
      const objIndex = this.tasks.findIndex(obj => obj.id === this.editId)

      this.tasks[objIndex].title = this.form.title
      this.tasks[objIndex].dueDate = this.form.dueDate
      this.tasks[objIndex].assignee.user_id = this.form.user_id
      this.tasks[objIndex].assignee.avatar = this.form.avatar
      this.tasks[objIndex].tag = this.form.tag
      this.tasks[objIndex].status = this.form.status

      this.form = {}
      this.closeDialog()
      this.notify('Task User Updated Success !', 'secondary')
    }
  }
}
</script>

<style scoped>
  .input-text {
    line-height: 1.4 !important
  }
</style>
