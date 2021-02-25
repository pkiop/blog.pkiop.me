<template>
  <div class="sidebar">
    <MainCategory
      v-for="mainCategory in category"
      :key="mainCategory.id"
      class="main-category"
      :main-category="mainCategory"
    />
  </div>
</template>

<script>
import MainCategory from '@/components/Sidebar/MainCategory.vue';

export default {
  name: 'Sidebar',
  components: {
    MainCategory,
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;

  width: $sidebar-width;

  background-color: white;

  & > div {
    color: black;
  }
}
</style>
