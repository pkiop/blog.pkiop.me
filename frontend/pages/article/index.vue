<template>
  <div>
    <ul id="example-1">
      <li v-for="list in info" :key="list.id">
        <PostBlock :post-title="list.name" :post-id="String(list.id)" />
      </li>
    </ul>
  </div>
</template>

<script>
import PostBlock from '@/components/PostBlock'

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
    this.info = await this.$http.$get(`http://localhost:4000/api/posts`)
  },
  fetchOnServer: true,
}
</script>
