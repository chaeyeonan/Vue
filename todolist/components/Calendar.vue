<script>
import { DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
  },
  props: {
    todayDate: {
      type: String,
    },
  },
  data() {
    return {
      date: this.todayDate,
      maxDate: "2024-12-31",
      minDate: "2024-01-01",
      isDark: true,
      innerHeight: "100%",
    };
  },
};
</script>

<template>
  <div class="calender-container">
    <DatePicker
      v-model="date"
      :is-dark="isDark"
      :max-date="maxDate"
      :min-date="minDate"
      @input="$emit('changeDate', date)"
      class="calender"
    />
  </div>
</template>

<style scoped>
.calender-container {
  width: 40%;
}
.calender {
  width: 100%;
  height: 265px;
}
</style>
