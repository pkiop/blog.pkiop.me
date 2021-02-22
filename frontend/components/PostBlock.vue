<template>
  <div class="cover">
    <img class="title-image" :src="titleImage" />
    <NuxtLink :to="`/article/${postId}`">
      {{ postTitle }}
    </NuxtLink>
    <div class="time-block">
      <Time class="time" :time="createAt" />
      <Time class="time" :time="updateAt" />
    </div>
  </div>
</template>

<script>
import IUImage from '@/assets/IU.webp';
import Time from '@/components/Time';

export default {
  name: 'PostBlock',
  components: [Time],
  props: {
    postTitle: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    createAt: {
      type: String,
      required: true,
    },
    updateAt: {
      type: String,
      required: true,
    },
    titleImageLink: {
      type: String,
      default: IUImage,
    },
  },
  data() {
    return {
      titleImage: this.titleImageLink,
    };
  },
};
</script>

<style lang="scss">
.cover {
  a {
    font-size: 1.2rem;
    padding: 0.3rem 0;
  }
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $color-main1;
  padding: 1rem 2rem;

  border-radius: $main-radius;
}

.title-image {
  width: 10rem;
  border-radius: $main-radius;
}

.time {
  font-size: 0.6rem;
}
</style>
