<template>
  <div class="sub-category">
    {{ subCategory.name }}
  </div>
</template>

<script>
export default {
  name: 'MainCategory',
  props: {
    subCategory: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.sub-category {
  margin-top: 0.4rem;
  margin-left: 1rem;
  div {
    color: black;
  }
}
</style>
