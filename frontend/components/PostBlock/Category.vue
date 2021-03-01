<template>
  <div class="post-block-category">
    <div class="post-block-main-category">{{ mainCategory }}</div>
    /
    <div class="post-block-sub-category">{{ subCategory }}</div>
  </div>
</template>

<script>
export default {
  name: 'PostBlockCategory',
  props: {
    mainCategory: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.post-block-category {
  display: flex;
}

.post-block-main-category {
  font-size: 1.2rem;
}
.post-block-sub-category {
  font-size: 1.1rem;
}
</style>
