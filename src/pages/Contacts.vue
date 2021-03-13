<template>
  <q-page class="q-pa-md">
    <template>
      <div class="q-pa-sm q-pt-lg">
        <q-table
          title="Treats"
          :data="records"
          :columns="columns"
          row-key="name"
          selection="multiple"
          binary-state-sort
          :selected.sync="selected"
          hide-bottom
          hide-selected-banner
        >

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

            <q-space />

            <q-btn
              label="Add contact"
              color="primary"
              class="q-mr-sm text-white float-right text-capitalize"
              @click="addContact"
            />
          </template>
<!--        end of table top slot-->

<!--       custom table header -->
          <template v-slot:header="props">
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
                {{ props.row.name }}
              </q-td>
              <q-td key="calories" :props="props">
                {{ props.row.calories }}
              </q-td>
              <q-td key="fat" :props="props">
                <div class="text-pre-wrap">{{ props.row.fat }}</div>
              </q-td>
              <q-td key="carbs" :props="props">
                {{ props.row.carbs }}
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
                :disabled="addingContact"
                :loading="addingUser"
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
const records = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65
  }
]

export default {
  data () {
    return {
      hasData: true,
      hideNoData: false,
      openDialog: false,
      form: {
        name: '',
        email: '',
        companyName: '',
        role: '',
        forecast: '',
        recentAct: ''
      },
      dialogTitle: 'Add Contact',
      editting: false,
      contacts: [],

      selected: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ]
    }
  },

  computed: {
    records () {
      return this.hasData === true
        ? records
        : []
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
      console.log('user created')
      this.openDialog = true
    },
    closeDialog () {
      this.editting = false
      this.openDialog = false
    },
    btnSave () {
      if (!this.editting) {
        console.log('save clicked')
        console.log(this.form)
        if (!this.form.length) {
          console.log('empty ensure to insert all records')
        }
        this.contacts.push(this.form)
        console.log('contacts', this.contacts)
        this.form = '' // clear form
        this.closeDialog() // close dialog
      }
    },
    deleteContact () {
      console.log('user deleted')
    },
    editContact () {
      console.log('edit user')
    }
  }
}
</script>

<style scoped>

</style>
