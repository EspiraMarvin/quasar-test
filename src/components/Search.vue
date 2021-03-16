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

    <q-icon name="eva-bell-outline" class="q-pa-sm " size="md" color="black" />
  </div>

</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>

</style>
