<template>
  <!--        add and edit contact dialog-->
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title>{{ dialogTitle }}</q-toolbar-title>
        </q-toolbar>
        <ErrorMessage :errorMessage="errorMessage" />
        <q-form ref="userForm">
          <div class="row">
            <div class="col-md-6 col-xs-12 q-pa-md">
              <q-input
                standard
                v-model="userForm.name"
                placeholder="Name *"
                type="text"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Please enter name', hasWhiteSpacesOnly]"
              />
            </div>
            <div class="col-md-6 col-xs-12 q-pa-md">
              <q-input
                standard
                v-model="userForm.email"
                placeholder="Email *"
                type="email"
                lazy-rules
                mask="email"
                :rules="[val => !!val || 'Email is missing', isValidEmail]"
              />
            </div>
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.companyName"
              placeholder="Company Name *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter company name', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.role"
              placeholder="Role *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter role', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.forecast"
              placeholder="Forecast *"
              type="number"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type a forecast number',
                val => val > 0 && val < 100 || 'Please type a number'
              ]"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="info" class="q-pl-md q-pr-md" outline label="Cancel" @click="closeDialog" />
        <q-btn label="Save" color="primary" class="q-pl-md q-pr-md" @click="btnSave" />
      </q-card-actions>
    </q-card>
</template>

<script>
const moment = require('moment')
import { cloneDeep } from 'lodash'
import ErrorMessage from '../../error/ErrorMessage'
import commonMixins from '../../../mixins/commonMixins'
export default {
  name: 'AddEditDialog',
  components: { ErrorMessage },
  mixins: [commonMixins],
  props: {
    dialogTitle: {
      type: String,
      required: true
    },
    closeDialog: {
      type: Function,
      required: false
    },
    records: {
      type: Array,
      required: true
    },
    editting: {
      type: Boolean,
      required: true
    },
    selected: {
      type: Array
    }
  },
  data () {
    return {
      // form data
      userForm: {
        name: '',
        email: '',
        companyName: '',
        role: '',
        forecast: '',
        recentAct: ''
      },
      moment: moment,
      errorMessage: ''
    }
  },
  mounted () {
    if (this.editting) {
      this.userForm = cloneDeep(this.selected[0])
    }
  },
  methods: {
    btnSave () {
      if (!this.editting) {
        if (this.hasWhiteSpacesOnly(this.userForm.name || this.userForm.email || this.userForm.companyName ||
          this.userForm.role || this.userForm.forecast) === 'field is empty') {
          this.$refs.userForm.focus()
          this.errorMessage = 'All Fields Are Required !'
        } else if (this.isValidEmail(this.userForm.email) === 'Invalid email') {
          this.errorMessage = 'Invalid email'
        } else if (this.userForm.name && this.userForm && this.userForm.companyName && this.userForm.role && this.userForm.forecast) {
          // add records to array (front)
          this.userForm.recentAct = moment(this.randomDate(new Date(2020, 5, 1), new Date())).startOf('hour').fromNow() // gets relative time
          this.records.unshift(this.userForm)
          this.userForm = {} // clear form
          this.closeDialog()
          return this.notify('Contact Added Success !', 'secondary')
        }
      } else {
        // editting
        if (this.hasWhiteSpacesOnly(this.userForm.name && this.userForm.email && this.userForm.companyName &&
          this.userForm.role && this.userForm.forecast) === 'field is empty') {
          this.errorMessage = 'All Fields Are Required !'
        } else if (this.userForm.name && this.userForm.email && this.userForm.companyName && this.userForm.role &&
          this.userForm.forecast) {
          // get the object with data to edit
          const formItem = this.userForm
          // find the index of this ID's object
          const objIndex = this.records.findIndex(obj => obj.id === formItem.id)
          this.records[objIndex].id = formItem.id
          this.records[objIndex].name = formItem.name
          this.records[objIndex].avatar = formItem.avatar
          this.records[objIndex].email = formItem.email
          this.records[objIndex].companyName = formItem.companyName
          this.records[objIndex].role = formItem.role
          this.records[objIndex].forecast = formItem.forecast
          this.records[objIndex].recentAct = formItem.recentAct
          // after edit clear form
          this.userForm = {}
          this.closeDialog()
          this.notify('Contact Updated Success !', 'secondary')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
