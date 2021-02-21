<template>
  <div class="cover">
    <img class="title-image" :src="titleImage" />
    <NuxtLink :to="`/article/${postId}`">
      {{ postTitle }}
    </NuxtLink>
    <div>
      <div>생성일 : {{ shortCreateAt }}</div>
      <div>수정일 : {{ shortUpdateAt }}</div>
    </div>
  </div>
</template>

<script>
import { reduceStringTime } from '@/utils/datetime/index.ts';
import IUImage from '@/assets/IU.webp';
export default {
  name: 'PostBlock',
  components: {},
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
  computed: {
    shortCreateAt() {
      if (this.createAt) {
        return reduceStringTime(this.createAt);
      }
      return 'loading';
    },
    shortUpdateAt() {
      if (this.updateAt) {
        return reduceStringTime(this.updateAt);
      }
      return 'loading';
    },
  },
};
</script>

<style lang="scss" scoped>
.cover {
  width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: skyblue;
  padding: 1rem 2rem;
}

.title-image {
  width: 10rem;
  border-radius: $main-radius;
}
</style>
