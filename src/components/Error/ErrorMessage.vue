<template>
  <div class="flex flex-center chip">
    <q-chip
      :class="errorMessage ? 'bg-red text-white' : 'bg-white'" :icon="errorMessage ? 'warning' : ''">{{ errorMessage }}
    </q-chip>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    errorMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .chip {
    margin-top: -10px;
    margin-bottom: -10px;
  }
</style>
