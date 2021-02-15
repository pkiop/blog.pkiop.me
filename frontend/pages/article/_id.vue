<template>
  <div id="idCover">
    <div id="textArea"></div>
  </div>
</template>

<script>
import marked from 'marked'
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
    document.getElementById('textArea').innerHTML = await marked(
      this.info.texts,
      {
        sanitize: true,
      }
    )
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
#textArea {
  list-style: disc inside;
  & > blockquote {
    background: #aaaaaa;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
}
</style>
