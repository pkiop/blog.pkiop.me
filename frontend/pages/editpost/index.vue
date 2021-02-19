<template>
  <div class="wrap">
    <div>add post</div>
    <div class="title-input">
      <div>제목 :</div>
      <input v-model="title" type="text" />
    </div>
    <textarea v-model="mdText"></textarea>
    <button @click="submit">작성</button>
  </div>
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
    border: 1px solid black;
    height: 600px;
  }
}

.title-input {
  input {
    border: $color-inputBorder;
  }
}
</style>
