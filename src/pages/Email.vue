<template>
  <div>
    <h4 class="text-h6 text-center">Emails</h4>
    <p class="text-center" v-if="this.$route.params.id">Emails {{this.$route.params.id}}</p>

    <q-list class="my-list q-mr-lg q-ml-lg">
      <q-card
        v-for="email in emails"
        :key="email.id"
        v-ripple
        class="q-mb-xs"
      >
        <q-card-section>
          <div class="row no-wrap items-center" style="height:10.5px">
            <div class="col ellipsis row">&nbsp;
              &nbsp;<span>{{ email.email }} </span>
            </div>
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
    </q-list>
  </div>
</template>

<script>
import { getEmails } from '../Config/data.js'
export default {
  name: 'Emails',
  data () {
    return {
      emails: []
    }
  },
  methods: {
    filterEmails () {
      if (!this.$route.params.id) {
        this.emails = getEmails
        return
      }
      this.emails = getEmails.filter(email => {
        return email.status === this.$route.params.id
      })
    }
  },
  created () {
    this.filterEmails()
  },
  mounted () {
    // this.filterEmails()
  },
  watch: {
    '$route.params.id': {
      handler () {
        this.filterEmails()
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
