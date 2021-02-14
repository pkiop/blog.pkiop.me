<template>
  <div>
    <div>id를 가짐 {{ $route.params.id }}</div>
    <div>API Return : {{ info }}</div>
    <ul>
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
    </ul>
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
    console.log('output : ', await marked(this.info.texts))
    document.getElementById('textArea').innerHTML = await marked(
      this.info.texts
    )
  },
  fetchOnServer: true,
}
</script>

<style lang="scss" scoped>
ul,
#textArea {
  list-style: disc inside;
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    quotes: '\201C''\201D''\2018''\2019';
  }
}
</style>
