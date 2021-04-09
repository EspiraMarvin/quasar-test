<template>
  <div class="row">
    <q-input
      placeholder="Search ..."
      class="q-ma-xs q-ml-xs-xs bg-white col-xs-9 col-sm-10 col-md-11"
      filled
      dense
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <q-space />

    <q-tabs
      v-model="tab"
    >
      <q-tab alert name="bell" style="color:#000;" icon="eva-bell-outline" />
    </q-tabs>

  </div>

</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      tab: ''
    }
  }
}
</script>

<style scoped>

</style>
