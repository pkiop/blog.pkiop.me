<template>
  <div class="default_cover">
    <Header />
    <div class="contents">
      <Sidebar />
      <nuxt class="nuxt" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Sidebar,
    Footer,
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
  margin-left: $sidebar-width;
  width: calc(100% - 22rem);
  @media only screen and (max-width: 768px) {
    margin-left: $sidebar-width-mobile;
    width: calc(100% - 17rem);
  }
  position: relative;
  margin-bottom: $footer-height;
  /* width: 100%; */
}
</style>
