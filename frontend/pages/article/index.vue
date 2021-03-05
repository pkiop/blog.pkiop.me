<template>
  <div class="article">
    <div class="post-block-list">
      <PostBlock
        v-for="list in info"
        :key="list.id"
        class="post-block"
        :main-category="list.mainCategory"
        :sub-category="list.subCategory"
        :post-title="list.title"
        :post-id="String(list.id)"
        :create-at="list.createAt"
        :update-at="list.updateAt"
      />
    </div>
    <div>{{ getMainCategory }}</div>
    <div>{{ getSubCategory }}</div>
  </div>
</template>

<script>
import PostBlock from '@/components/PostBlock/index';
import gql from 'graphql-tag';
import { listPkiopblogs } from '@/src/graphql/queries';
import { mapGetters } from 'vuex';

// List는 굳이 SEO할 필요 없을 듯 asyncData
export default {
  name: 'Article',
  components: {
    PostBlock,
  },
  data() {
    return {
      info: [],
    };
  },
  computed: {
    ...mapGetters({ getMainCategory: 'article/getMainCategory' }),
    ...mapGetters({ getSubCategory: 'article/getSubCategory' }),
  },
  async mounted() {
    await this.getArticleList();
  },
  async updated() {
    await this.getArticleList();
  },
  methods: {
    async getArticleList() {
      const queryData = gql`
        ${listPkiopblogs}
      `;
      const res = await this.$apollo.query({
        query: queryData,
        variables: {
          filter: {
            mainCategory: {
              contains: this.getMainCategory || '',
            },
            // 값 비어있으면 filter에서 빠짐 (핵꿀)
            subCategory: {
              contains: this.getSubCategory || '',
            },
          },
        },
      });
      this.info = res.data.listPkiopblogs.items;
    },
  },
};
</script>

<style lang="scss">

.article {
  margin: 1em;
}

.post-block-list {
  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
}

.post-block {
  margin: 1rem 1rem 0 1rem;
}
</style>
