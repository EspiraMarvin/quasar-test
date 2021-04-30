<template>
  <div>
    <h4 class="text-h6 text-center">Deals</h4>
    <p class="text-center" v-if="this.$route.params.id">Deals {{this.$route.params.id}}</p>

    <q-list class="q-pa-sm q-mx-xs">
      <q-card
        v-for="deal in deals"
        :key="deal.id"
        v-ripple
        class="q-mb-xs"
      >
        <q-card-section>
          <div class="row no-wrap items-center" style="height:10.5px">
            <div class="col ellipsis row">&nbsp;
              &nbsp;<span>{{ deal.value }} - {{ deal.rating }} - {{ deal.date }}</span>
            </div>
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
    </q-list>
  </div>
</template>

<script>
import { getDeals } from '../Config/data.js'

export default {
  name: 'Deals',
  data () {
    return {
      deals: []
    }
  },
  methods: {
    filterDeals () {
      if (!this.$route.params.id) {
        this.deals = getDeals
        return
      }
      this.deals = getDeals.filter(deal => {
        return deal.rating === this.$route.params.id
      })
    }
  },
  mounted () {
    this.filterDeals()
  },
  watch: {
    '$route.params.id': {
      handler () {
        this.filterDeals()
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
