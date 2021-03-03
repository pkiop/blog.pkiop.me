<template>
  <div class="wrap">
    <div v-if="AUTH_ENV">
      <div>edit post</div>
      <input v-model="title" class="title-input" type="text" />
      <CategorySelect
        class="edit-post-category-select"
        :category-list="categoryList.data.listCategories.items"
      />
      <textarea v-model="mdText"></textarea>
      <button @click="submit">수정</button>
      <button @click="deletePost">삭제</button>
      <div>hi</div>
    </div>
    <div v-else>허가되지 않은 접근</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import { getPkiopblog, listCategories } from '@/src/graphql/queries';
import { updatePkiopblog, deletePkiopblog } from '@/src/graphql/mutations';
import CategorySelect from '@/components/EditPost/CategorySelect';

export default {
  components: { CategorySelect },

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

    const categoryList = await client.query({
      query: gql`
        ${listCategories}
      `,
    });
    return { title, mdText, categoryList };
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
        mainCategory: this.$store.state.editpost.mainCategory,
        subCategory: this.$store.state.editpost.subCategory,
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
        await this.$router.push('/article');
      } catch (error) {
        console.log('Error creating post...', error);
      }
    },
    async deletePost() {
      const inputValue = {
        id: this.$route.params.id,
      };
      try {
        const gqlres = gql`
          ${deletePkiopblog}
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
  div {
    text-align: center;
  }
  .title-input {
    color: white;
    width: 90%;
    overflow: scroll;
    font-size: $title-font-size - 1.5rem;
  }
  textarea {
    width: 90%;
    height: 600px;
    color: white;
    border: 1px solid white;
  }
}
</style>
