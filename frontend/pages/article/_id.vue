<template>
  <div>
    <div>id를 가짐 {{ $route.params.id }}</div>
    <div>API Return : {{ info }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
    }
  },
  async fetch() {
    this.info = await this.$http.$get(
      `http://localhost:4000/api/posts/${this.$route.params.id}`
    )
  },
  fetchOnServer: true,

  // async fetch() {
  //   await axios
  //     .get()
  //     .then((response) => (this.info = response.data))
  // },
}
</script>
