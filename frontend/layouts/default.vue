<template>
  <div class="default_cover">
    <Header />
    <div class="contents">
      <Sidebar :category="categoryList" />
      <nuxt class="nuxt" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
const testData = [
  {
    name: '개발',
    sub: [{ name: 'Typescript' }, { name: 'Nodejs' }, { name: 'aws' }],
  },
];

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      categoryList: testData,
    };
  },
};
</script>

<style lang="scss">
.default_cover {
  height: 100%;
  overflow: hidden;
}

.contents {
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
}

.nuxt {
  box-sizing: border-box;
  width: calc(100% - #{$sidebar-width});
}
</style>
