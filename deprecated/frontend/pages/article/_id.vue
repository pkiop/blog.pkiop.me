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
    try {
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
          return hljs.highlight(lang, code).value;
        },
      });
      const mdContents = await marked(res.data.getPkiopblog.mdContents);
      hljs.highlightAll();
      const mainCategory = res.data.getPkiopblog.mainCategory;
      const subCategory = res.data.getPkiopblog.subCategory;
      // TODO: add tracker
      // const track = (title) => context.$gtag.pageview(`/${title}`);
      // track(title);
      return { title, mdContents, mainCategory, subCategory };
    } catch (e) {
      return {
        title: 'error',
        mdContents: 'error',
        mainCategory: 'error',
        subCategory: 'error',
      };
    }
  },
  data() {
    return {
      info: null,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: this.title,
          name: this.title,
          content: this.mdContents,
        },
      ],
    };
  },
  computed: {
    titleComputed() {
      return this.title && 'b.p.m';
    },
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
#textArea {
  line-height: 1.2rem;

  // > 했을 때 강조
  & > blockquote {
    font-size: 1.4em;
    width: 60%;
    margin: 50px auto;
    font-family: Open Sans;
    font-style: italic;
    color: $color-font;
    padding: 1.2em 30px 1.2em 75px;
    border-left: 8px solid #3e5244;
    line-height: 1.6;
    position: relative;
    background: $color-codebackground;

    &::before {
      font-family: Arial;
      content: '\201C';
      color: #78c0a8;
      font-size: 4em;
      position: absolute;
      left: 10px;
      top: -10px;
    }

    & span {
      display: block;
      color: white;
      font-style: normal;
      font-weight: bold;
      margin-top: 1em;
    }
  }

  & > p {
    padding: 0.8rem 0;
  }

  p {
    color: $color-font;
  }

  & > h1 {
    font-size: 2rem;
    font-weight: 1000;
    padding: 1.4rem 0;
    color: $color-font;
  }

  & > h2 {
    font-size: 1.8rem;
    font-weight: 800;
    padding: 1.2rem 0;
    color: $color-font;
  }

  & > h3 {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 0;
    color: $color-font;
  }

  & > h4 {
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.8rem 0;
    color: $color-font;
  }

  & > p > a {
    color: $color-font;
  }

  & > ol {
    padding-left: 1rem;
    list-style-type: decimal;
    color: $color-font;
  }

  & > ul {
    padding-left: 1rem;
    list-style-type: circle;
  }

  ol,
  ul {
    li {
      color: $color-font;
      padding-bottom: 0.4rem;
    }
  }

  & > pre {
    margin: 1em 0;
    padding: 1em;
    border: 2px solid #3e5244;

    overflow: scroll;
    background-color: $color-codebackground;
    code {
      position: relative;
      padding: 1em;

      overflow: hidden;
      span {
        display: inline;
      }
    }
  }
}

.article-id-post-category {
  margin-bottom: 0.8rem;
}

.id-cover {
  margin: 1em;
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
