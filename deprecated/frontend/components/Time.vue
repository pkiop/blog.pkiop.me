<template>
  <div class="time">
    <div>{{ shortTime }}</div>
  </div>
</template>

<script>
import { reduceStringTime } from '@/utils/datetime/index.ts';
export default {
  name: 'Time',
  props: {
    time: {
      type: String,
      required: true,
    },
  },
  computed: {
    shortTime() {
      if (this.time) {
        const { year, month, day, hour, min, sec } = reduceStringTime(
          this.time
        );
        return `${year}/${month}/${day} ${hour}:${min}:${sec}`;
      }
      return 'loading';
    },
  },
};
</script>

<style lang="scss"></style>
