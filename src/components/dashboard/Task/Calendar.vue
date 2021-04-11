<template>
  <div>
    <div class="text-overline q-mt-sm q-mb-xs">{{ currentDate }}</div>
    <div class="q-ma-sm">
      <ul class="row justify-between flex-container-week-days">
        <li class="flex-item"
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
import { getDays } from '../../../Config/data'

export default {
  name: 'Calendar',
  data () {
    return {
      currentDate: '23 December, Sunday',
      days: getDays,
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
  .flex-container-week-days {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }
  .flex-container-week-dates li {
    border-radius: 50%;
    width: 20px;
    height: 20px
  }

</style>
