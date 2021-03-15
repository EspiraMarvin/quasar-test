<template>
  <div class="q-pa-md row justify-evenly">
    <q-list v-for="email in emails" :key="email" separator>
      <q-item>
        <q-item-section>{{ email.email }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { getEmails } from '../Config/data.js'
export default {
  name: 'Emails',
  data () {
    return {
      emails: getEmails
    }
  }
}
</script>

<style scoped>

</style>
