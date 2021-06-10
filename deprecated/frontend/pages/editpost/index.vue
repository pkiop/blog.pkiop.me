<template>
  <div class="wrap">
    <fragment v-if="AUTH_ENV">
      <div>add post</div>
      <div class="title-input">
        <span>제목 : </span>
        <input v-model="title" type="text" />
      </div>
      <input
        v-model="mainImageLink"
        placeholder="imageLink"
        class="image-input"
        type="text"
      />
      <CategorySelect :category-list="categoryList.data.listCategories.items" />
      <textarea v-model="mdText"></textarea>
      <button @click="submit">작성</button>
    </fragment>
    <fragment v-else>허가되지 않은 접근</fragment>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { listCategories } from '@/src/graphql/queries';
import { createPkiopblog } from '@/src/graphql/mutations';
import { Fragment } from 'vue-fragment';
import CategorySelect from '@/components/EditPost/CategorySelect';

export default {
  components: { CategorySelect, Fragment },
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`
        ${listCategories}
      `,
    });
    return { categoryList: res };
  },
  data() {
    return {
      title: 'Write your title',
      mdText: ['Write your post!'],
      mainImageLink: null,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
  },
  methods: {
    async submit() {
      const inputValue = {
        title: this.title,
        mdContents: this.mdText,
        mainImageLink: this.mainImageLink,
        mainCategory: this.$store.state.editpost.mainCategory,
        subCategory: this.$store.state.editpost.subCategory,
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
        this.$router.push('/article');
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
  background-color: $color-main2;
  margin: 1rem;
  div {
    text-align: center;
  }
  .title-input {
    input {
      border: 1px solid $color-inputBorder;
      color: white;
    }
  }
  textarea {
    border: 1px solid $color-inputBorder;
    height: 600px;
    color: white;
  }
  .image-input {
    color: white;
    width: 90%;
    overflow: scroll;
    font-size: $title-font-size - 1.5rem;
    border: 1px solid white;
  }
}
</style>
