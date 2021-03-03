<template>
  <div class="main-category">
    <NuxtLink :to="'/article/' + mainCategory.name + '/all'">
      {{ mainCategory.name }}
    </NuxtLink>
    <SubCategory
      v-for="subCategory in mainCategory.sub"
      :key="subCategory.id"
      :main-category-name="mainCategory.name"
      :sub-category="subCategory"
    />
  </div>
</template>

<script>
import SubCategory from '@/components/Sidebar/SubCategory';

export default {
  name: 'MainCategory',
  components: {
    SubCategory,
  },
  props: {
    mainCategory: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectMainCategory(event) {
      this.$store.commit('article/setMainCategory', event.target.outerText);
      this.$store.commit('article/setSubCategory', '');
    },
  },
};
</script>

<style lang="scss">
.main-category {
  margin-top: 2rem;
  margin-left: 2rem;
  a {
    display: block;
  }
  div {
    color: white;
  }
}
</style>
