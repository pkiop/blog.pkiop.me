<template>
  <div>
    <Header />
    <div class="contents">
      <Sidebar />
      <nuxt />
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
.contents {
  display: flex;
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
}
</style>
