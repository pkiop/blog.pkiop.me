<template>
  <div>
    <ul id="example-1">
      <li v-for="list in info.data.listPkiopblogs.items" :key="list.id">
        <PostBlock :post-title="list.title" :post-id="String(list.id)" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostBlock from '@/components/PostBlock';
import gql from 'graphql-tag';
import { listPkiopblogs } from '@/graphql/queries';

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
