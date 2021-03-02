<template>
  <div class="sub-category" @click="selectSubCategory">
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
