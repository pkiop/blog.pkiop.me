<template>
  <div class="default_cover">
    <Header />
    <div class="contents">
      <Sidebar :category="categories" />
      <nuxt class="nuxt" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import gql from 'graphql-tag';
import { listCategorys } from '@/src/graphql/queries';

export default {
  components: {
    Header,
    Sidebar,
  },
  async asyncData(context) {
    const queryCategoryData = gql`
      ${listCategorys}
    `;
    const client = context.app.apolloProvider.defaultClient;
    const result = await client.query({ query: queryCategoryData });
    const categories = result;
    return { categories };
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
