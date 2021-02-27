<template>
  <div v-if="AUTH_ENV">
    <div class="wrap">
      <div>add post</div>
      <div class="title-input">
        <div>제목 :</div>
        <input v-model="title" type="text" />
      </div>
      <textarea v-model="mdText"></textarea>
      <button @click="submit">작성</button>
    </div>
  </div>
  <div v-else>허가되지 않은 접근</div>
</template>

<script>
import gql from 'graphql-tag';
import { createPkiopblog } from '@/src/graphql/mutations';

export default {
  components: {},
  data() {
    return {
      title: 'Write your title',
      mdText: ['Write your post!'],
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
  },

  methods: {
    async submit() {
      const inputValue = {
        title: this.title,
        mdContents: this.mdText,
        createAt: new Date(),
        updateAt: new Date(),
      };
      try {
        const gqlres = gql`
          ${createPkiopblog}
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
    border: 1px solid $color-inputBorder;
    height: 600px;
    color: white;
  }
}

.title-input {
  input {
    border: 1px solid $color-inputBorder;
    color: white;
  }
}
</style>
