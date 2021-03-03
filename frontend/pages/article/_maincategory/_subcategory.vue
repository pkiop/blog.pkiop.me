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
  </div>
</template>

<script>
import PostBlock from '@/components/PostBlock/index';
import gql from 'graphql-tag';
import { listPkiopblogs } from '@/src/graphql/queries';

export default {
  name: 'Article',
  components: {
    PostBlock,
  },
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;

    const res = await client.query({
      query: gql`
        ${listPkiopblogs}
      `,
      variables: {
        filter: {
          mainCategory: {
            contains: context.route.params.maincategory || '',
          },
          // 값 비어있으면 filter에서 빠짐 (핵꿀)
          subCategory: {
            contains:
              context.route.params.subcategory === 'all'
                ? ''
                : context.route.params.subcategory,
          },
        },
      },
    });
    return { info: res.data.listPkiopblogs.items };
  },
};
</script>

<style lang="scss">
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
