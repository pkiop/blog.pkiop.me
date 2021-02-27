<template>
  <div class="article">
    <div class="post-block-list">
      <PostBlock
        v-for="list in info.data.listPkiopblogs.items"
        :key="list.id"
        class="post-block"
        :post-title="list.title"
        :post-id="String(list.id)"
        :create-at="list.createAt"
        :update-at="list.updateAt"
      />
    </div>
  </div>
</template>

<script>
import PostBlock from '@/components/PostBlock';
import gql from 'graphql-tag';
import { listPkiopblogs } from '@/src/graphql/queries';

export default {
  components: {
    PostBlock,
  },
  async asyncData(context) {
    const queryData = gql`
      ${listPkiopblogs}
    `;
    const client = context.app.apolloProvider.defaultClient;
    const info = await client.query({ query: queryData });
    return { info };
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
