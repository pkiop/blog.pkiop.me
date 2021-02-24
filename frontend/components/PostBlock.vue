<template>
  <div class="post-block-cover">
    <img class="title-image" :src="titleImage" />
    <div class="post-block-text">
      <NuxtLink :to="`/article/${postId}`">
        {{ postTitle }}
      </NuxtLink>
      <div class="time-block">
        <Time class="post-block-time" :time="createAt" />
        <Time class="post-block-time" :time="updateAt" />
      </div>
    </div>
  </div>
</template>

<script>
import IUImage from '@/assets/IU.webp';
import Time from '@/components/Time';

export default {
  name: 'PostBlock',
  components: { Time },
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
.post-block-cover {
  a {
    font-size: 1.2rem;
    padding: 0.3rem 0;
  }

  display: flex;
  background-color: $color-main1;
  padding: 1em 2em;

  border-radius: $main-radius;
}

.title-image {
  width: 9em;
  @media only screen and (max-width: 768px) {
    width: 4em;
  }
  border-radius: $main-radius;
}

.post-block-time {
  font-size: 0.6rem;
}

.post-block-text {
  display: flex;
  flex-direction: column;
}
</style>
