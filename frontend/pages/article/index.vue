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
import PostBlock from '@/components/PostBlock'
import gql from 'graphql-tag'

export default {
  components: {
    PostBlock,
  },
  async asyncData({ params, $apollo }) {
    const queryData = gql`
      query ListPkiopblogs(
        $filter: TablePkiopblogFilterInput
        $limit: Int
        $nextToken: String
      ) {
        listPkiopblogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          items {
            id
            title
            mdContents
            createAt
            updateAt
          }
          nextToken
        }
      }
    `
    const info = await $apollo.query({ query: queryData })
    return { info }
  },
  data() {
    return {
      info: null,
      links: 1,
    }
  },
}
</script>
