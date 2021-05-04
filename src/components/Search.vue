<template>
  <div class="row">
    <q-input
      :placeholder="currentRouteName"
      class="q-ma-xs q-ml-xs-xs bg-white col-xs-9 col-sm-10 col-md-11"
      filled
      dense
      debounce="300"
      v-model="filterItem"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-space />

    <q-icon name="eva-bell-outline" class="q-pa-sm " size="md" color="black" />

  </div>

</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      filterItem: ''
    }
  },
  watch: {
    // watch input value of a search, dispatch search action to mutate input value to the store whenever it changes
    filterItem (filterItem) {
      if (this.$route.name === 'Contacts') {
        this.$store.dispatch('FILTER_CONTACTS', filterItem)
      }
    }
  },
  computed: {
    // get current route name and use it as placeholder for search component
    currentRouteName () {
      const getRouteName = this.$route.name
      return getRouteName === 'Dashboard' ? 'search global' : '' || getRouteName === 'Contacts' ? 'search contacts' : ''
    }
  }
}
</script>

<style scoped>

</style>
