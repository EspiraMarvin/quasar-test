<template>
  <div>
    <div class="text-overline q-mt-sm q-mb-xs">{{ currentDate }}</div>
    <div class="q-mx-xs q-my-sm">
      <ul class="flex justify-between week-days" >
        <li
          v-for="day in customdays"
          :key="day.id"
          @click="active_id=day.id"
        >
          <p
            :style="day.class ? 'color: #109CF1' : ''"
          >
            {{day.day}}
          </p>
          <p
            :style="day.class ? 'background-color: #109CF1; color: white; text-align: center; border-radius: 50%; width: 20px; height: 20px' : ''"
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
