<template>
  <VeLine :data="chartData" :colors="gradient"></VeLine>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  name: 'LineGraph',
  components: { VeLine },
  data () {
    return {
      gradient: [
        '#2985ef'
      ],
      chartData: {
        columns: ['date', 'Closed Deal'],
        rows: [
          { date: '1 Dec', 'Closed Deal': 40 },
          { date: '8 Dec', 'Closed Deal': 100 },
          { date: '16 Dec', 'Closed Deal': 170 },
          { date: '22 Dec', 'Closed Deal': 65 },
          { date: '28 Dec', 'Closed Deal': 149 },
          { date: '31 Dec', 'Closed Deal': 162 }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
