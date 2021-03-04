<template>
  <div class="id-cover">
    <div class="id-contents">
      <PostCategory
        class="article-id-post-category"
        :main-category="mainCategory"
        :sub-category="subCategory"
      />
      <h1 class="title">{{ title }}</h1>
      <hr class="title-content-divider" />
      <div id="textArea"></div>
      <button v-if="AUTH_ENV" @click="editHandler">Edit</button>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.6.0/styles/darcula.min.css"
    />
    <!-- You can find theme in https://highlightjs.org/static/demo/ -->
  </div>
</template>

<script>
import marked from 'marked';
import gql from 'graphql-tag';
import { getPkiopblog } from '@/src/graphql/queries';
import PostCategory from '@/components/PostBlock/Category';
import hljs from 'highlight.js';

export default {
  name: 'ArticleID',
  components: { PostCategory },
  async asyncData(context) {
    const client = context.app.apolloProvider.defaultClient;
    const res = await client.query({
      query: gql`
        ${getPkiopblog}
      `,
      variables: { id: context.route.params.id },
    });

    const title = res.data.getPkiopblog.title;
    marked.setOptions({
      xhtml: true,
      gfm: true,
      highlight(code, lang) {
        console.log(hljs.highlight(lang, code).value);
        return hljs.highlight(lang, code).value;
      },
    });
    const mdContents = await marked(res.data.getPkiopblog.mdContents);
    hljs.highlightAll();
    const mainCategory = res.data.getPkiopblog.mainCategory;
    const subCategory = res.data.getPkiopblog.subCategory;
    return { title, mdContents, mainCategory, subCategory };
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
    margin: 1.4rem 0;
  }

  & > h2 {
    font-size: 1.8rem;
    margin: 1.2rem 0;
  }

  & > h3 {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  & > h4 {
    font-size: 1.4rem;
    margin: 0.8rem 0;
  }

  & > p > a {
    color: $color-link;
  }

  & > ol {
    padding-left: 1rem;
    list-style-type: decimal;
  }

  & > pre {
    margin: 1em 0;
    padding: 1em;
    background-color: $color-codebackground;
    & > code {
      padding: 1em;
    }
  }
}

.article-id-post-category {
  margin-bottom: 0.8rem;
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
  font-weight: 600;
  font-size: $title-font-size;
  margin-bottom: $title-bottom-padding;
}
</style>
