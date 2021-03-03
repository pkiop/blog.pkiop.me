<template>
  <NuxtLink
    class="sub-category"
    :to="'/article/' + mainCategoryName + '/' + subCategory.name"
  >
    {{ subCategory.name }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'MainCategory',
  props: {
    mainCategoryName: {
      type: String,
      required: true,
    },
    subCategory: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectSubCategory(event) {
      this.$store.commit('article/setMainCategory', '');
      this.$store.commit('article/setSubCategory', event.target.outerText);
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
