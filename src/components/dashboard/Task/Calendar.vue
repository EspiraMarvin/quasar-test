<template>
  <div>
    <div class="text-overline q-mt-sm q-mb-xs">{{ currentDate }}</div>
    <div class="q-ma-sm">
      <ul class="flex justify-between week-days">
        <li
            v-for="day in customdays"
            :key="day.id"
            @click="active_id=day.id"
        >
          <p
            :style="day.class ? 'color: #109CF1; border-radius: 50%' : 'background-color-green'"
          >
            {{day.day}}
          </p>
          <p
            :style="day.class ? 'background-color: #109CF1; color: white; border-radius: 50%;' : ''"
          >
            {{day.date}}
          </p>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDays } from 'src/Config/data'
export default {
  name: 'Calendar',
  data () {
    return {
      days: getDays,
      currentDate: '23 December, Sunday',
      active_id: 1
    }
  },
  computed: {
    customdays () {
      return this.days.map(day => {
        day.class = this.active_id === day.id ? 'active' : ''
        return day
      })
    }
  }
}
</script>

<style scoped>
  .week-days {
    padding: 0;
    margin: 0;
    list-style: none;
  }

</style>
