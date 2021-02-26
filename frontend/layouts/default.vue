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
    id: 'asdkjfnwkjbakjbc',
    name: '개발',
    sub: [
      { id: 'asjdsje', name: 'Typescript' },
      { id: 'djkbwjzks', name: 'Nodejs' },
      { id: 'dkjcnwlzxjd', name: 'aws' },
    ],
  },
  {
    id: 'askjbwjbxxzkjbckljw',
    name: '책',
    sub: [
      { id: 'dkwnwslv', name: '경영경제' },
      { id: 'welkjcjbz', name: '자기개발' },
    ],
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
  height: calc(100% - #{$header-height});
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
}
</style>
