<template>
  <div id="idCover">
    <div id="title"></div>
    <div id="textArea"></div>
    <button @click="editHandler">Edit</button>
  </div>
</template>

<script>
import marked from 'marked';
import gql from 'graphql-tag';

export default {
  data() {
    return {
      info: null,
    };
  },

  async fetch() {
    this.info = await this.$apollo.query({
      query: gql`
        query GetPkiopblog($id: ID!) {
          getPkiopblog(id: $id) {
            id
            title
            mdContents
            createAt
            updateAt
          }
        }
      `,
      variables: { id: this.$route.params.id },
    });
    document.getElementById(
      'title'
    ).innerHTML = this.info.data.getPkiopblog.title;
    document.getElementById('textArea').innerHTML = await marked(
      this.info.data.getPkiopblog.mdContents,
      {
        sanitize: true,
      }
    );
  },
  methods: {
    editHandler() {
      console.log('edit');
    },
  },
  fetchOnServer: true,
};
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
