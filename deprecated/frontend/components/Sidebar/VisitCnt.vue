<template>
  <div class="visit-cnt-wrapper">
    <div class="today-cnt">{{ todayVisitCnt }}</div>
    <span>/</span>
    <div class="total-cnt">{{ totalVisitCnt }}</div>
  </div>
</template>

<script>
import { getNextDay } from '@/utils/datetime';
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
  mounted() {
    const timeInput = new Date(getNextDay());

    const splitCookie = (cookieString) => {
      return cookieString.split('; ').map((el) => {
        const [key, value] = el.split('=');
        return {
          [key]: value,
        };
      });
    };

    const cookieObject = splitCookie(document.cookie);
    if (cookieObject.pkiopBlogVisit === undefined) {
      document.cookie = `pkiopBlogVisited=true; expires=${timeInput}; path=/`;
      // TODO: 방문자 올리는 api 호출
    }
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
