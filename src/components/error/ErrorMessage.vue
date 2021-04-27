<template>
    <div class="flex flex-center chip">
      <q-chip
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
    margin-top: 0px;
    margin-bottom: -13px;
  }
</style>
