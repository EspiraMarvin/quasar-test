<template>
    <div class="flex flex-center">
      <q-chip
        class="chip"
        :class="errorMessage ? 'bg-red text-white' : 'hidden'" :icon="errorMessage ? 'warning' : ''"
      >
      {{ errorMessage }}
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
    margin-bottom: -18px;
  }
</style>
