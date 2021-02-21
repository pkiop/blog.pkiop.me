<template>
  <div class="wrap">
    <div v-if="AUTH_ENV">
      <div>edit post</div>
      <div class="title-input">
        제목 : <input v-model="title" type="text" />
      </div>
      <textarea v-model="mdText"></textarea>
      <button @click="submit">수정</button>
      <div>hi</div>
    </div>
    <div v-else>허가되지 않은 접근</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import { getPkiopblog } from '@/src/graphql/queries';
import { updatePkiopblog } from '@/src/graphql/mutations';

export default {
  components: {},

  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`
        ${getPkiopblog}
      `,
      variables: { id: context.route.params.id },
    });
    const title = res.data.getPkiopblog.title;
    const mdText = res.data.getPkiopblog.mdContents;
    return { title, mdText };
  },
  data() {
    return {
      title: null,
      mdText: ['Hello World!'],
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
  },

  methods: {
    async submit() {
      const inputValue = {
        id: this.$route.params.id,
        title: this.title,
        mdContents: this.mdText,
        updateAt: new Date(),
      };
      try {
        const gqlres = gql`
          ${updatePkiopblog}
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
