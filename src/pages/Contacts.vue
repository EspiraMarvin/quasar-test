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
                      filled
                      v-model="form.name"
                      label="Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      filled
                      v-model="form.email"
                      label="Email *"
                      type="email"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter email']"
                    />
                  </div>
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      filled
                      v-model="form.companyName"
                      label="Company Name *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter company name']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      filled
                      v-model="form.role"
                      label="Role *"
                      type="text"
                      lazy-rules
                      :rules="[val => (val && val.length > 0) || 'Please enter role']"
                    />
                  </div>
                  <div class="col-md-6 col-xs-12 q-pa-md">
                    <q-input
                      filled
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
import { cloneDeep } from 'lodash'
export default {
  data () {
    return {
      hasData: true,
      hideNoData: false,
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
      contacts: [],
      selected: [],
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
      records: [
        {
          id: 1,
          name: 'Lindsey Stroud',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          email: 'Lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50',
          recentAct: '5 Minutes ago'
        },
        {
          id: 2,
          name: 'Nicci Troiani',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          email: 'nicci.troiani@gmail.com',
          companyName: 'Slack',
          role: 'Manager',
          forecast: '75',
          recentAct: '14 Minutes ago'
        },
        {
          id: 3,
          name: 'George Fields',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          email: 'george.fields@gmail.com',
          companyName: 'Clockify',
          role: 'CEO',
          forecast: '10',
          recentAct: '6 Hours ago'
        },
        {
          id: 4,
          name: 'Rebecca Mooore',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          email: 'rebecca.mooore@gmail.com',
          companyName: 'Trello',
          role: 'Engineer',
          forecast: '25',
          recentAct: 'Dec 14, 2018'
        },
        {
          id: 5,
          name: 'Jane Doe',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          email: 'jane.doe@gmail.com',
          companyName: 'Slack',
          role: 'Manager',
          forecast: '30',
          recentAct: 'Dec 12, 2018'
        },
        {
          id: 6,
          name: 'Jones Dermont',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          email: 'jones.dermont@gmail.com',
          companyName: 'Slack',
          role: 'Developer',
          forecast: '40',
          recentAct: 'Dec 11, 2018'
        },
        {
          id: 7,
          name: 'Martin Merces',
          email: 'martin.merces@gmail.com',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          companyName: 'Google',
          role: 'Manager',
          forecast: '60',
          recentAct: 'Dec 9, 2018'
        },
        {
          id: 8,
          name: 'Franz Ferdinand',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          email: 'franz.ferdinand@gmail.com',
          companyName: 'Facebook',
          role: 'Manager',
          forecast: '100',
          recentAct: 'Dec 6, 2018'
        },
        {
          id: 9,
          name: 'John Smith',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          email: 'john.smith@gmail.com',
          companyName: 'Skype',
          role: 'CEO',
          forecast: '75',
          recentAct: 'Nov 30, 2018'
        },
        {
          id: 10,
          name: 'Judith Williams',
          avatar: 'https://cdn.quasar.dev/img/avatar.png',
          email: 'judith.williams@gmail.com',
          companyName: 'Google',
          role: 'Designer',
          forecast: '45',
          recentAct: 'Nov 26, 2018'
        }
      ]
    }
  },

  computed: {
    // records () {
    //   return this.hasData === true
    //     ? records
    //     : []
    // },
    contactsKey: {
      handler: {
      },
      deep: true
    }
  },
  watch: {
    selected: {
      handler () {
        if (this.selected.length) {

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
      console.log(this.selected[0])
    },
    closeDialog () {
      this.editting = false
      this.openDialog = false
    },
    btnSave () {
      if (!this.editting) {
        console.log('form length', this.form)
        if (!this.form.name || !this.form.email || !this.form.companyName || !this.form.role || !this.form.forecast) {
          return this.notify('All Fields are required !')
        }
        // this.contacts = [...this.contacts, this.form]
        this.records.unshift(this.form)
        this.form = '' // clear form
        this.closeDialog() // close dialog
      } else {
        // edit user here

        // after edit clear form
        this.form = ''
      }
    },
    deleteContact () {
      console.log('user deleted')
      console.log(this.selected[0].id)
      if (this.selected.length === 1) {
        const id = this.selected[0].id
        this.records = this.records.filter(contact => contact.id !== id)
        this.selected.length = ''
      } else {
        console.log('count', this.selected.length)
      }
    },
    // function generates random date between two dates
    randomDate (start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    },
    // notify plugin for error messages
    notify (message) {
      this.$q.notify({
        message: message,
        position: 'top',
        color: 'red',
        icon: 'announcement'
      })
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
