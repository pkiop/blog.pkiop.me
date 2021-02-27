<template>
  <div class="id-cover">
    <div class="id-contents">
      <h1 class="title">{{ title }}</h1>
      <hr class="title-content-divider" />
      <div id="textArea"></div>
      <button v-if="AUTH_ENV" @click="editHandler">Edit</button>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
import gql from 'graphql-tag';
import { getPkiopblog } from '@/src/graphql/queries';

export default {
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`
        ${getPkiopblog}
      `,
      variables: { id: context.route.params.id },
    });
    const title = res.data.getPkiopblog.title;
    const mdContents = await marked(res.data.getPkiopblog.mdContents, {
      xhtml: true,
      gfm: true,
    });
    return { title, mdContents };
  },
  data() {
    return {
      info: null,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
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
  & > p {
    padding: 0.8rem 0;
  }

  & > h1 {
    font-size: 2rem;
    margin-bottom: 1.4rem;
  }

  & > h2 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  & > h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  & > h4 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
}

.id-cover {
  margin: 2em;
  background-color: $color-main2;
}

.id-contents {
  margin: 3rem;
}

.title-content-divider {
  margin-bottom: $title-bottom-padding;
}

.title {
  font-size: $title-font-size;
  margin-bottom: $title-bottom-padding;
}
</style>
