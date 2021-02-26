<template>
  <div class="main-category">
    <div>{{ mainCategory.name }}</div>
    <SubCategory
      v-for="subCategory in mainCategory.sub"
      :key="subCategory.id"
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
};
</script>

<style lang="scss">
.main-category {
  margin-top: 2rem;
  margin-left: 2rem;
  div {
    color: white;
  }
}
</style>
