<template>
  <div>
    <div>article main</div>
    <ul id="example-1">
      <li v-for="list in info" :key="list.id">
        <NuxtLink :to="`/article/${list.id}`">
          ID : {{ list.id }} Data : {{ list.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
