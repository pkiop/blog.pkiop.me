<template>
  <div class="default_cover">
    <Header />
    <div class="contents">
      <Sidebar :category="categories.data.listCategories.items" />
      <nuxt class="nuxt" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import gql from 'graphql-tag';
import { listCategories } from '@/src/graphql/queries';

export default {
  components: {
    Header,
    Sidebar,
  },
  data() {
    return { categories: { data: { listCategories: { items: [] } } } };
  },
  async mounted() {
    await this.getCategories();
  },
  methods: {
    async getCategories() {
      const queryCategoryData = gql`
        ${listCategories}
      `;
      this.categories = await this.$apollo.query({ query: queryCategoryData });
    },
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
  width: 100%;
  height: calc(100% - #{$header-height});
  overflow-x: hidden;
  overflow-y: scroll;
  border: $hacker-border;

  @media screen and (min-width: 1000px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media screen and (min-width: 1500px) {
    padding-left: 20%;
    padding-right: 20%;
  }

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
}
</style>
