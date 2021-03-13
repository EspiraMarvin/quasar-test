<template>
  <q-page class="q-pa-md">
    <template>
      <div class="q-pa-md">
        <q-table
          title="Treats"
          :data="records"
          :columns="columns"
          row-key="name"
          selection="multiple"
          :selected.sync="selected"
          :hide-bottom="hideBottom"
          :hide-selected-banner="hideSelectedBanner"
          :hide-pagination="hidePagination"
        >
          <template v-slot:header="props">
            <q-th :props="props">
              <q-th>
                <q-checkbox size="xs" v-model="props.selected"/>
              </q-th>
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
              >
                {{ col.label }}
              </q-th>
            </q-th>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
                <q-checkbox size="xs" v-model="props.selected"/>
              </q-td>
              <q-td key="name" :props="props">
                {{ props.row.name }}
                <q-popup-edit v-model="props.row.name">
                  <q-input v-model="props.row.name" dense autofocus counter ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="calories" :props="props">
                {{ props.row.calories }}
                <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
                  <q-input type="number" v-model="props.row.calories" dense autofocus ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="fat" :props="props">
                <div class="text-pre-wrap">{{ props.row.fat }}</div>
                <q-popup-edit v-model="props.row.fat">
                  <q-input type="textarea" v-model="props.row.fat" dense autofocus ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="carbs" :props="props">
                {{ props.row.carbs }}
                <q-popup-edit v-model="props.row.carbs" title="Update carbs" buttons persistent>
                  <q-input type="number" v-model="props.row.carbs" dense autofocus hint="Use buttons to close" ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
              <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
              <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
              <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
            </q-tr>
          </template>
        </q-table>
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
      hideBottom: false,
      hideSelectedBanner: true,
      hideNoData: false,
      hidePagination: true,

      selected: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'center',
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
  }
}
</script>

<style scoped>

</style>
