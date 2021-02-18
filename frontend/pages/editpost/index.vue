<template>
  <div class="wrap">
    <div>edit post</div>
    <textarea v-model="mdText"></textarea>
    <button @click="submit">수정</button>
  </div>
</template>

<script>
import marked from 'marked';
import gql from 'graphql-tag';
import { UpdatePkiopblog } from '@/src/graphql/mutations';

export default {
  components: {},
  data() {
    return {
      mdText: ['Hello World!'],
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
    async submit() {
      const inputValue = {
        title: 'hello',
        mdContents: this.mdText,
        createAt: new Date(),
        updateAt: new Date(),
      };
      try {
        const gqlres = gql`
          ${UpdatePkiopblog}
        `;

        await this.$apollo.mutate({
          mutation: gqlres,
          variables: { input: inputValue },
        });
      } catch (error) {
        console.log('Error creating post...', error);
      }
    },
  },
};
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    text-align: center;
  }
  textarea {
    border: 1px solid black;
    height: 600px;
  }
}
</style>
