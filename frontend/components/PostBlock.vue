<template>
  <NuxtLink class="post-block-cover" :to="`/article/${postId}`">
    <img class="title-image" :src="titleImage" />
    <div class="post-block-text">
      {{ postTitle }}
      <div class="time-block">
        <Time class="post-block-time" :time="updateAt" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import noPicture from '@/assets/noPicture.png';
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

.title-image {
  width: 7em;

  border-radius: $main-radius;
  margin-right: 1em;
}

.post-block-time {
  font-size: 0.6rem;
}

.post-block-text {
  display: flex;
  flex-direction: column;
}
</style>
