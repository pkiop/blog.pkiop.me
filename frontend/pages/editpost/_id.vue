<template>
  <div class="wrap">
    <div>edit post</div>
    <client-only placeholder="loading...">
      <textarea v-model="mdText"></textarea>
    </client-only>
    <button @click="submit">수정</button>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { UpdatePkiopblog } from '@/src/graphql/mutations';

export default {
  components: {},

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
    const mdText = res.data.getPkiopblog.mdContents;
    return { mdText };
  },
  data() {
    return {
      mdText: ['Hello World!'],
    };
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
