<template>
  <div class="cover">
    <NuxtLink :to="`/article/${postId}`">
      {{ postTitle }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'PostBlock',
  components: {},
  props: {
    postTitle: {
      type: String,
      default: 'hello',
    },
    postId: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.cover {
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
  padding: 1rem 2rem;
}
</style>
