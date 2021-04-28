<template>
  <q-page class="q-pa-sm">
    <template>
      <div class="q-pa-sm q-pt-lg">
        <div class="flex justify-between q-mb-sm">
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

<!--          custom table body-->
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td >
                <q-checkbox size="xs" v-model="props.selected"/>
              </q-td>
              <q-td key="name" :props="props">
                  <q-avatar size="sm" class="q-mr-xs" v-if="!props.row.avatar">
                    <q-icon size="sm" name="face" />
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

        <q-dialog v-model="openDialog">
          <AddEditDialog
          :dialogTitle="dialogTitle"
          :records="records"
          :editting="editting"
          :selected="selected"
          :closeDialog="closeDialog"
        />
        </q-dialog>

        <q-dialog persistent v-model="confirmDelete" transition-show="fadeIn" transition-hide="fadeOut">
          <DeleteDialog :deleteWarningDetails="deleteWarningDetails" :proceedDelete="proceedDelete" />
        </q-dialog>

      </div>
    </template>
  </q-page>
</template>

<script>
import DeleteDialog from '../components/globals/DeleteDialog'
const pluralize = require('pluralize')
import AddEditDialog from '../components/contacts/dialog/AddEditDialog'
import commonMixins from '../mixins/commonMixins'
import { getUsers } from '../Config/data.js'
export default {
  name: 'Contacts',
  components: { DeleteDialog, AddEditDialog },
  mixins: [commonMixins],
  data () {
    return {
      loading: false,
      openDialog: false,
      dialogTitle: '',
      editting: false,
      confirmDelete: false,
      deleteWarningDetails: [],
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
    },
    closeDialog () {
      this.editting = false
      this.openDialog = false
    },
    deleteContact () {
      this.confirmDelete = true
      this.deleteWarningDetails[0] = 'Delete Contact?'
      this.deleteWarningDetails[1] = "Are you sure you want to proceed. This can't be undone"
    },
    proceedDelete () {
      this.confirmDelete = false
      const selectedCount = this.selected.length
      const contactNo = pluralize('Contact', selectedCount, true)
      this.selected.filter(item => {
        this.records.splice(this.records.indexOf(item), 1)
        return item
      })
      this.selected = []
      return this.notify(`${contactNo} Deleted Success !`, 'red')
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
