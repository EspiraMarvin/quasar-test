<template>
  <q-page class="q-pa-md">
    <template>
      <div class="q-pa-sm q-pt-lg">
        <div class="row q-mb-sm">
          <div class="float-left col-xs-4 col-sm-1">
            <span>Company:
              <q-expansion-item dense dense-toggle class="top-table-expansion-item" label="All">
                <q-item dense exact clickable><span class="text-caption">10</span></q-item>
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
            <q-inner-loading showing color="primary" />
          </template>

<!--          table top slot-->
          <template v-slot:top="props">

            <template v-if="selected.length">
              <span class="float-left">
                <q-badge class="q-ml-sm" size="xs" v-model="props.selected" :label="selected.length" />
                <span class="q-ml-md">{{selected.length}} selected
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
              <q-td key="email" :props="props">
                {{ props.row.email }}
              </q-td>
              <q-td key="companyName" :props="props">
                <div class="text-pre-wrap">{{ props.row.companyName }}</div>
              </q-td>
              <q-td key="role" :props="props">
                {{ props.row.role }}
              </q-td>
              <q-td key="forecast" :props="props">
                {{ props.row.forecast }}%
              </q-td>
              <q-td key="recentAct" :props="props">
                {{ props.row.recentAct }}
              </q-td>
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
              <q-form ref="addUserForm">
                <div class="row">
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.name"
                      label="Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.email"
                      label="Email *"
                      type="email"
                      lazy-rules
                      mask="email"
                      :rules="[val => (val && val.length > 0) || 'Please enter email']"
                    />
                  </div>
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.companyName"
                      label="Company Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter company name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.role"
                      label="Role *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter role']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      standard
                      v-model="form.forecast"
                      label="Forecast *"
                      type="number"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter forecast']"
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
              >
                <template v-slot:loading>
                  <q-spinner-facebook />
                </template>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </template>
  </q-page>
</template>

<script>
const moment = require('moment')
import commonMixins from '../mixins/commonMixins'
import { data } from '../Config/data.js'
import { cloneDeep } from 'lodash'
export default {
  name: 'Contacts',
  mixins: [commonMixins],
  data () {
    return {
      openDialog: false,
      loading: false,
      // form data
      form: {
        name: '',
        email: '',
        companyName: '',
        role: '',
        forecast: '',
        recentAct: moment(this.randomDate(new Date(2020, 5, 1), new Date())).startOf('hour').fromNow() // gets relative time
      },
      dialogTitle: '',
      editting: false,
      moment: moment,
      selected: [],
      selectedRecords: [],
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'email', align: 'left', label: 'email', field: 'email', sortable: true },
        { name: 'companyName', align: 'left', label: 'Company name', field: 'companyName', sortable: true },
        { name: 'role', align: 'left', label: 'Role', field: 'role' },
        { name: 'forecast', align: 'left', label: 'Forecast', field: 'forecast' },
        { name: 'recentAct', align: 'left', label: 'Recent activity', field: 'recentAct' }
      ],
      records: data
    }
  },

  computed: {
    // records () {
    //   return this.hasData === true
    //     ? records
    //     : []
    // },
  },
  watch: {
    selected: {
      handler () {
        if (this.selected.length) {
          this.editting = true
        }
      },
      deep: true
    }
  },

  methods: {
    addContact () {
      this.openDialog = true
      this.dialogTitle = 'Add Contact'
    },
    editContact () {
      this.editting = true
      this.openDialog = true
      this.dialogTitle = 'Edit Contact'
      this.form = cloneDeep(this.selected[0])
    },
    closeDialog () {
      this.editting = false
      this.openDialog = false
    },
    btnSave () {
      // add contact
      if (!this.editting) {
        console.log('form length', this.form)
        if (!this.form.name || !this.form.email || !this.form.companyName || !this.form.role || !this.form.forecast) {
          return this.notify('All Fields are required !', 'red')
        }
        // this.contacts = [...this.contacts, this.form]
        // this.records = [...this.records, this.form]
        this.records.unshift(this.form)
        this.form = {} // clear form
        this.closeDialog() // close dialog
        return this.notify('Contact Added Success !', 'secondary')
      } else {
        // edit contact // get the object with data to edit
        const formItem = this.form
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
        this.form = {}
        this.closeDialog()
        this.notify('Contact Updated Success !', 'secondary')
      }
    },
    deleteContact () {
      if (this.selected.length === 1) {
        const id = this.selected[0].id
        this.records = this.records.filter(contact => contact.id !== id)
        this.selected.length = ''
        return this.notify('Contact Deleted Success !', 'secondary')
      } else if (this.selected.length > 1 && this.selected.length) {
        const selectedCount = this.selected.length
        this.selectedRecords = this.selected
        // return this.records.filter(el => this.selectedRecords.includes(el))
        this.records = this.records.filter(contact => {
          this.records.findIndex(selectedRecords => contact.id !== selectedRecords.id)
        })
        this.selected.length = ''
        return this.notify(`${selectedCount} Contacts Deleted Success !`, 'secondary')
      }
    },
    // function generates random date between two dates
    randomDate (start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
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
</style>
