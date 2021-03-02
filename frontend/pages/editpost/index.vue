<template>
  <div v-if="AUTH_ENV">
    <div class="wrap">
      <div>add post</div>
      <div class="title-input">
        <div>제목 :</div>
        <input v-model="title" type="text" />
        <CategorySelect
          class="edit-post-category-select"
          :category-list="categoryList.data.listCategories.items"
        />
      </div>
      <textarea v-model="mdText"></textarea>
      <button @click="submit">작성</button>
    </div>
  </div>
  <div v-else>허가되지 않은 접근</div>
</template>

<script>
import gql from 'graphql-tag';
import { listCategories } from '@/src/graphql/queries';
import CategorySelect from '@/components/EditPost/CategorySelect';

export default {
  components: { CategorySelect },
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`
        ${listCategories}
      `,
      variables: { id: context.route.params.id },
    });
    return { categoryList: res };
  },
  data() {
    return {
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
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

.edit-post-category-select {
  color: white;
  margin: 1rem 0;
}
</style>
