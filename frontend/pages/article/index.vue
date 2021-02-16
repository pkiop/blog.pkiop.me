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
  data() {
    return {
      info: null,
      links: 1,
    }
  },
  async fetch() {
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
    this.info = await this.$apollo.query({ query: queryData })
    console.log('thisinfo is ', this.info)
  },
  fetchOnServer: true,
}
</script>
