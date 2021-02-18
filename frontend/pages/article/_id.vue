<template>
  <div id="idCover">
    <div id="title">title : {{ title }}</div>
    <div id="textArea"></div>
    <button @click="editHandler">Edit</button>
  </div>
</template>

<script>
import marked from 'marked';
import gql from 'graphql-tag';

export default {
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
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
      variables: { id: context.route.params.id },
    });
    const title = res.data.getPkiopblog.title;
    const mdContents = await marked(res.data.getPkiopblog.mdContents, {
      sanitize: true,
    });
    return { title, mdContents };
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    document.getElementById('textArea').innerHTML = this.mdContents;
  },
  methods: {
    editHandler() {
      this.$router.push(`/editpost/${this.$route.params.id}`);
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
