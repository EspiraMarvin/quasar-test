<template>
  <q-page class="q-pa-sm q-mt-xs">
    <template>
      <div class="q-pa-xs q-pt-lg">
        <div class="flex justify-between items-center q-mb-sm">
          <div class="col-xs-4 col-sm-1">
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
              label="Add contact" color="primary" class="q-mr-xs-auto text-white add-contact-button text-capitalize"
              @click="addContact"
            />
          </div>
        </div>
        <q-table
          title="Contacts"
          :data="records"
          :filter="filterItem"
          :columns="columns"
          row-key="name"
          selection="multiple"
          :selected.sync="selected"
          :loading="loadingContacts"
          :pagination.sync="pagination"
          hide-selected-banner
          no-data-label="No Contacts Available"
          no-results-label="Sorry could not uncover any results"
          style="max-height: 800px"
        >
<!--          table loading data-->
          <template v-slot:loading>
              <q-inner-loading showing color="primary" />
          </template>

<!--          table top slot-->
          <template v-slot:top="props">
            <template v-if="selected.length">
              <div class="action-buttons">
                <q-badge class="q-ml-sm" size="xs" v-model="props.selected" :label="selected.length" />
                <span class="q-ml-sm">selected
                  <q-icon v-show="selected.length === 1" name="edit" class="q-ml-md" color="accent" size="20px" @click="editContact"/>
                  <q-icon name="delete" class="q-ml-md" color="accent" size="20px" @click="deleteContact"/>
                </span>
              </div>
            </template>
            <template v-else>
              <q-checkbox class="float-left" size="xs" color="white" v-model="props.selected"/>
            </template>
          </template>

<!--          custom no data template -->
          <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-cyan q-gutter-sm">
              <q-icon size="2em" name="sentiment_dissatisfied" />
              <span> {{ message }} </span>
              <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
            </div>
          </template>

<!--       custom table header -->
          <template v-slot:header="props">
              <q-tr :props="props">
                <q-th>
                    <q-checkbox class="float-left" size="xs" v-model="props.selected"/>
                </q-th>
                  <q-th  v-for="col in props.cols" :key="col.name" :props="props">
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

        <q-dialog v-model="confirmDelete" transition-show="fadeOut" transition-hide="fadeIn">
          <DeleteDialog :deleteWarningDetails="deleteWarningDetails" :proceedDelete="proceedDelete" />
        </q-dialog>

      </div>
    </template>
  </q-page>
</template>

<script>
import DeleteDialog from '../components/globals/DeletePrompt'
const pluralize = require('pluralize')
import AddEditDialog from '../components/contacts/AddEditDialog'
import commonMixins from '../mixins/commonMixins'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Contacts',
  components: { DeleteDialog, AddEditDialog },
  mixins: [commonMixins],
  data () {
    return {
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
        { name: 'forecast', align: 'left', label: 'Forecast (%)', field: 'forecast' },
        { name: 'recentAct', align: 'left', label: 'Recent Activity', field: 'recentAct' }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.requestData()
    }, 1500)
  },
  computed: {
    ...mapGetters({
      loadingContacts: 'GET_FETCHING_CONTACTS',
      records: 'GET_CONTACTS',
      filterItem: 'GET_FILTER_ITEM'
    })
  },
  methods: {
    ...mapActions({
      deleteContactComplete: 'DELETE_CONTACT'
    }),
    requestData () {
      this.$store.dispatch('FETCH_CONTACTS')
    },
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
      const contactNos = pluralize('Contact', this.selected.length, true)
      this.deleteWarningDetails[0] = `Delete ${contactNos}?`
      this.deleteWarningDetails[1] = "Are you sure you want to proceed. This can't be undone"
    },
    proceedDelete () {
      this.confirmDelete = false
      const contactNos = pluralize('Contact', this.selected.length, true)
      this.deleteContactComplete(this.selected)
      this.selected = []
      return this.notify(`${contactNos} Deleted Success !`, 'red')
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
  .action-buttons{
    margin-top: 9px;
     }
</style>
