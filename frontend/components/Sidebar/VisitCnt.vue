<template>
  <div class="visit-cnt-wrapper">
    <div class="today-cnt">{{ todayVisitCnt }}</div>
    /
    <div class="total-cnt">{{ totalVisitCnt }}</div>
  </div>
</template>

<script>
export default {
  name: 'VisitCnt',
  props: {
    todayVisitCnt: {
      type: Number,
      required: true,
    },
    totalVisitCnt: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.visit-cnt-wrapper {
  display: flex;
  justify-content: center;

  margin: 0% 10%;
  .today-cnt {
    color: #78a86f;
    margin-right: 0.4rem;
  }

  .total-cnt {
    color: #dd615c;
    margin-left: 0.4rem;
  }
}
</style>
