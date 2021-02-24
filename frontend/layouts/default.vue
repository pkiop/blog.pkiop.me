<template>
  <div class="default_cover">
    <Header />
    <div class="contents">
      <Sidebar />
      <nuxt class="nuxt" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
.default_cover {
  height: 100%;
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
  margin-bottom: $footer-height;
}
</style>
