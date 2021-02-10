<template>
  <div>
    <div>id를 가짐 {{ $route.params.id }}</div>
    <div>API Return : {{ info }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: null,
    }
  },
  async fetch() {
    await axios
      .get(`http://localhost:4000/api/posts/12`)
      .then((response) => (this.info = response.data))
  },
}
</script>
