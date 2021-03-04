<template>
  <div class="sidebar-wrapper">
    <input id="sidebar" type="checkbox" />
    <div class="sidebar">
      <label class="on-off" for="sidebar"></label>
      <MainCategory
        v-for="mainCategory in category"
        :key="mainCategory.id"
        class="main-category"
        :main-category="mainCategory"
      />
    </div>
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
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;

  width: $sidebar-width;

  background-color: $color-main2;
  left: 0;
  transition: 1s all;
}

.on-off {
  position: absolute;
  top: 1%;
  right: 5%;
  color: white;
  &:before {
    content: '<';
  }
}

.sidebar-wrapper {
  #sidebar {
    width: 0px;
    height: 0px;
    padding: 0px;
    margin: 0px;
  }

  #sidebar:checked ~ .sidebar {
    background-color: black;
    left: calc(50px - #{$sidebar-width});
    color: black;
    transition: 1s all;

    .on-off {
      &:before {
        content: '>';
      }
      left: 10rem;
      color: white;
    }

    & {
      width: 0;
    }
  }
}
</style>
