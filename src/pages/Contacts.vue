<template>
  <q-page class="q-pa-md">
    <template>
      <div class="q-pa-sm q-pt-lg">
        <div class="flex justify-between q-mb-sm">
          <div class="float-left col-xs-4 col-sm-1">
            <span>Company:
              <q-expansion-item dense dense-toggle class="top-table-expansion-item" label="All">
                <q-item @click="filterCompany(value)" :value="10" dense exact clickable><span class="text-caption">10</span></q-item>
                <q-item dense exact clickable><span class="text-caption">50</span></q-item>
              </q-expansion-item>
            </span>
          </div>
          <q-space />
          <div class="float-right">
            <q-btn
              label="Add contact"
              color="primary"
              class="q-mr-xs-auto text-white add-contact-button text-capitalize"
              @click="addContact"
            />
          </div>
        </div>
        <q-table
          title="Treats"
          :data="records"
          :columns="columns"
          row-key="name"
          selection="multiple"
          binary-state-sort
          :selected.sync="selected"
          hide-selected-banner
          :loading="loading"
          :pagination.sync="pagination"
        >
<!--          table loading data-->
          <template v-slot:loading>
            <q-inner-loading  showing color="primary" />
          </template>

<!--          table top slot-->
          <template v-slot:top="props">

            <template v-if="selected.length">
              <span class="action-buttons">
                <q-badge class="q-ml-sm" size="xs" v-model="props.selected" :label="selected.length" />
                <span class="q-ml-sm">selected
                  <q-icon v-show="selected.length === 1" name="edit" class="q-ml-md" color="accent" size="20px" @click="editContact"/>
                  <q-icon name="delete" class="q-ml-md" color="accent" size="20px" @click="deleteContact"/>
                </span>
              </span>
            </template>
            <template v-else>
              <q-checkbox class="float-left" size="xs" color="white" v-model="props.selected"/>
            </template>
          </template>
<!--        end of table top slot-->

<!--       custom table header -->
          <template v-slot:header="props" :selected="selected">
              <q-tr :props="props">
                <q-th>
                    <q-checkbox class="float-left" size="xs" v-model="props.selected"/>
                </q-th>
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                  >
                    {{ col.label }}
                  </q-th>
              </q-tr>
          </template>
<!--      end of custom table header -->

<!--          custom table body-->
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td >
                <q-checkbox size="xs" v-model="props.selected"/>
              </q-td>
              <q-td key="name" :props="props">
                  <q-avatar size="sm" class="q-mr-xs" v-if="!props.row.avatar">
                    <q-icon
                      size="sm"
                      name="face"
                    />
                  </q-avatar>
                  <q-avatar size="sm" class="q-mr-xs" v-else>
                    <img :src="props.row.avatar">
                  </q-avatar>
                {{ props.row.name }}
              </q-td>
              <template v-for="col in props.cols">
                <q-td v-if="col.name !== 'name'" :key="col.name">
                  {{ props.row[col.name] }}
                </q-td>
              </template>
            </q-tr>
          </template>
        </q-table>

<!--        add contact dialog-->

        <q-dialog v-model="openDialog">
          <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
              <q-toolbar>
                <q-toolbar-title>{{ dialogTitle }}</q-toolbar-title>
              </q-toolbar>
              <span class="flex flex-center text-red-12">{{ errorMessage }}</span>
              <q-form ref="userForm">
                <div class="row">
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="userForm.name"
                      label="Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="userForm.email"
                      label="Email *"
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
                      label="Company Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter company name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="userForm.role"
                      label="Role *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter role']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="userForm.forecast"
                      label="Forecast *"
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
              <q-btn
                label="Save"
                @click="btnSave"
                outline
                color="primary"
                class="q-pl-md q-pr-md"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </template>
  </q-page>
</template>

<script>
const moment = require('moment')
const pluralize = require('pluralize')
import commonMixins from '../mixins/commonMixins'
import { getUsers } from '../Config/data.js'
import { cloneDeep } from 'lodash'
export default {
  name: 'Contacts',
  mixins: [commonMixins],
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
      openDialog: false,
      dialogTitle: '',
      errorMessage: '',
      editting: false,
      moment: moment,
      pluralize: pluralize,
      selected: [],
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, sortable: true },
        { name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true },
        { name: 'companyName', align: 'left', label: 'Company Name', field: 'companyName', sortable: true },
        { name: 'role', align: 'left', label: 'Role', field: 'role' },
        { name: 'forecast', align: 'left', label: 'Forecast', field: 'forecast' },
        { name: 'recentAct', align: 'left', label: 'Recent Activity', field: 'recentAct' }
      ],
      records: []
    }
  },
  mounted () {
    this.loading = true
    setTimeout(() => {
      this.records = getUsers
      this.loading = false
    }, 1500)
  },
  watch: {
    // this watches if dialog is closed, then resets the form an d error message if present
    openDialog: {
      handler (dialog) {
        if (dialog === false) {
          this.userForm = {}
          this.errorMessage = ''
        }
      }
    }
  },
  methods: {
    addContact () {
      this.openDialog = true
      this.dialogTitle = 'Add Contact'
      this.editting = false
    },
    editContact () {
      this.editting = true
      this.openDialog = true
      this.dialogTitle = 'Edit Contact'
      this.userForm = cloneDeep(this.selected[0])
    },
    closeDialog () {
      this.editting = false
      this.openDialog = false
    },
    btnSave () {
      if (!this.editting) {
        if (!this.userForm.name || !this.userForm.email || !this.userForm.companyName || !this.userForm.role || !this.userForm.forecast) {
          this.$refs.userForm.focus()
          this.errorMessage = 'All Fields Are Required!'
        } else if (this.isValidEmail(this.userForm.email) === 'Invalid email') {
          this.errorMessage = 'Invalid email'
        } else if (this.userForm.name && this.userForm && this.userForm.companyName && this.userForm.role && this.userForm.forecast) {
          // add records to array (front)
          console.log('userform', this.userForm)
          this.userForm.recentAct = moment(this.randomDate(new Date(2020, 5, 1), new Date())).startOf('hour').fromNow() // gets relative time
          this.records.unshift(this.userForm)
          this.userForm = {} // clear form
          this.closeDialog()
          return this.notify('Contact Added Success !', 'secondary')
        }
      } else {
        if (!this.userForm.name || !this.userForm.email || !this.userForm.companyName || !this.userForm.role || !this.userForm.forecast) {
          this.errorMessage = 'All Fields Are Required'
        } else if (this.isValidEmail(this.userForm.email) === 'Invalid email') {
          this.errorMessage = 'Invalid email'
        } else if (this.userForm.name && this.userForm && this.userForm.companyName && this.userForm.role && this.userForm.forecast) {
          // edit contact // get the object with data to edit
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
    },
    deleteContact () {
      const selectedCount = this.selected.length
      const contactNo = pluralize('Contact', selectedCount, true)
      this.selected.filter(item => {
        this.records.splice(this.records.indexOf(item), 1)
        return item
      })
      this.selected = []
      return this.notify(`${contactNo} Deleted Success !`, 'red')
    },
    filterCompany (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .top-table-expansion-item{
    margin-left: 60px;
    margin-top: -25px;
    color: #109CF1
  }
  .add-contact-button{
    margin-top: -20px
  }
  .action-buttons {
    margin-top: 9px;
  }
</style>
