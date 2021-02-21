<template>
  <div>
    <div class="post-block-list">
      <PostBlock
        v-for="list in info.data.listPkiopblogs.items"
        :key="list.id"
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
  data() {
    return {
      info: null,
      links: 1,
    };
  },
};
</script>

<style lang="scss">
.post-block-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
