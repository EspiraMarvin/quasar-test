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
          binary-state-sort
          :selected.sync="selected"
          :hide-bottom="hideBottom"
          :hide-selected-banner="hideSelectedBanner"
          :hide-pagination="hidePagination"
        >

          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th>
<!--                <input type="checkbox" id="c1" name="cc" />-->
<!--                <label for="c1"><span>4</span></label>-->
<!--                <q-checkbox class="float-left" size="xs" v-model="props.selected"/>-->
                <template v-if="selected.length">
<!--                  <q-checkbox class="float-left" size="xs" v-model="props.selected">-->
<!--                    <label style="margin-left: -20px; background-color: #1D1D1D; color: black"><span class="">{{selected.length}}</span></label>-->
<!--                    <span>{{selected.length}}</span>-->
<!--                  </q-checkbox>-->
                  <q-badge class="float-left q-ml-xs" size="xs" v-model="props.selected" :label="selected.length"  />
                </template>
                <template v-else>
<!--                  <q-badge rounded class="float-left q-ml-xs" size="xs" v-model="props.selected"  />-->
                  <q-checkbox class="float-left" size="xs" color="grey-8" :value="props.selected"/>
<!--                  <q-badge class="float-left q-ml-xs" text-color="black" label="" />-->
                </template>
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

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td>
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
      hideSelectedBanner: false,
      hideNoData: false,
      hidePagination: true,

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
  }
}
</script>

<style scoped>

</style>
