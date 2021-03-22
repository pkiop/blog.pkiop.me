<template>
  <div class="sidebar-wrapper">
    <input id="sidebar" type="checkbox" />
    <div class="sidebar">
      <label class="on-off" for="sidebar"></label>
      <div class="main-category-wrapper">
        <MainCategory
          v-for="mainCategory in category"
          :key="mainCategory.id"
          class="main-category"
          :main-category="mainCategory"
        />
      </div>
      <!-- <VisitCnt :today-visit-cnt="0" :total-visit-cnt="0" /> -->
    </div>
  </div>
</template>

<script>
import MainCategory from '@/components/Sidebar/MainCategory.vue';
// import VisitCnt from '@/components/Sidebar/VisitCnt.vue';

export default {
  name: 'Sidebar',
  components: {
    MainCategory,
    // VisitCnt,
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

  margin-left: 1em;

  color: white;

  display: flex;
  flex-direction: column;

  width: $sidebar-width;

  border: $hacker-border;

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
    left: calc(-#{$sidebar-width});
    color: black;
    transition: 0.4s all;
    width: 0px;
    font-size: 0px;
    border: 0px;
    padding: 0rem;
    margin: 0rem;

    & > div > a {
      transition: 0.4s all;
      color: black;
    }

    & > * > * {
      & > * {
        margin: 0rem;
      }
      margin: 0rem;
    }

    .on-off {
      &:before {
        content: '>';
      }
      right: -14.5rem;
      font-size: 1rem;

      transition: 0.4s all;
      color: white;
    }
  }

  .main-category-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
