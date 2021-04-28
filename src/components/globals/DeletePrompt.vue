<template>
  <q-card rounded class="confirm-card flex flex-center">
    <q-card-section class="row items-center">
      <div class="text-h6 text-weight-bold q-ml-xl q-py-sm">{{ deleteWarningDetails[0] }}</div>
      <span class="q-ml-sm q-px-md">{{ deleteWarningDetails[1] }}</span>
    </q-card-section>

    <q-card-actions class="row justify-evenly q-mb-md">
      <q-btn unelevated rounded label="Cancel" padding="sm xl" no-caps color="grey-3" class="text-black text-weight-bold" v-close-popup />
      <q-btn unelevated rounded label="Delete" padding="sm xl" no-caps color="pink" class="text-weight-bold" @click="proceedDelete" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'DeleteDialog',
  props: {
    deleteWarningDetails: {
      type: Array
    },
    proceedDelete: {
      type: Function
    }
  }
}
</script>

<style scoped>
  .confirm-card{
    width: 330px;
    border-radius: 18px;
  }
</style>
