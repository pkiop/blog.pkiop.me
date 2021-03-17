<template>
  <div class="wrap">
    <fragment v-if="AUTH_ENV">
      <div>edit post</div>
      <input v-model="title" class="title-input" type="text" />
      <input v-model="mainImageLink" class="image-input" type="text" />
      <CategorySelect
        :category-list="categoryList.data.listCategories.items"
        :origin-main-category="originMainCategory"
        :origin-sub-category="originSubCategory"
      />
      <textarea v-model="mdText"></textarea>
      <button @click="submit">수정</button>
      <button @click="deletePost">삭제</button>
    </fragment>
    <div v-else>허가되지 않은 접근</div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import { getPkiopblog, listCategories } from '@/src/graphql/queries';
import { updatePkiopblog, deletePkiopblog } from '@/src/graphql/mutations';
import CategorySelect from '@/components/EditPost/CategorySelect';
import { Fragment } from 'vue-fragment';
export default {
  components: { CategorySelect, Fragment },

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

    const mainImageLink = res.data.getPkiopblog.mainImageLink;
    const originMainCategory = res.data.getPkiopblog.mainCategory;
    const originSubCategory = res.data.getPkiopblog.subCategory;

    return {
      title,
      mdText,
      categoryList,
      mainImageLink,
      originMainCategory,
      originSubCategory,
    };
  },
  data() {
    return {
      title: null,
      mdText: ['Hello World!'],
      mainImageLink: null,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
  },

  methods: {
    async submit() {
      const inputValue = {
        id: this.$route.params.id,
        title: this.title,
        mdContents: this.mdText,
        mainImageLink: this.mainImageLink,
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
        console.error('Error creating post...', error);
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
        console.error('Error creating post...', error);
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
  .image-input {
    color: white;
    width: 90%;
    overflow: scroll;
    font-size: $title-font-size - 1.5rem;
  }
}
</style>
