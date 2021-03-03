<template>
  <NuxtLink class="post-block-cover" :to="`/article/${postId}`">
    <img class="title-image" :src="titleImage" />
    <div class="post-block-text">
      <div class="post-block-text-top">
        <div class="post-title">{{ postTitle }}</div>
        <PostCategory
          :main-category="mainCategory"
          :sub-category="subCategory"
        />
      </div>
      <div class="time-block">
        <Time class="post-block-time" :time="createAt" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import noPicture from '@/assets/noPicture.png';
import Time from '@/components/Time';
import PostCategory from '@/components/PostBlock/Category';

export default {
  name: 'PostBlock',
  components: { Time, PostCategory },
  props: {
    postTitle: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    mainCategory: {
      type: String,
      required: true,
    },
    subCategory: {
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
      default: noPicture,
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
.post-block-cover {
  a {
    font-size: 1.2rem;
    padding: 0.3rem 0;
  }

  display: flex;
  background-color: $color-main1;
  padding: 1em;

  border-radius: $main-radius;

  &:hover {
    background-color: $color-sub1;
  }
}

.post-title {
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
}

.title-image {
  width: 7em;

  border-radius: $main-radius;
  margin-right: 1em;
}

.post-block-time {
  font-size: 0.8rem;
}

.post-block-text {
  display: flex;
  flex-direction: column;
}
</style>
