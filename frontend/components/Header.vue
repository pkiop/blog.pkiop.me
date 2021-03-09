<template>
  <header>
    <a href="/">
      <img class="logo" :src="logo" />
    </a>
    <div v-if="isMobile === false" class="linkWrapper">
      <NuxtLink v-if="AUTH_ENV" to="/editpost">Editpost</NuxtLink>
      <a href="https://pkiop.me">About</a>
      <NuxtLink to="/article">Article</NuxtLink>
    </div>
    <Hambug v-if="isMobile === true" :link-list="linkList" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
    />
  </header>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'Header',
  components: {},
  data() {
    return {
      logo,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
      windowWidth: undefined,
      linkList: [
        {
          id: 'dwknklznds',
          text: 'About',
          url: 'https://pkiop.me',
          type: 'a',
        },
        {
          id: 'askljdwjn',
          text: 'Article',
          url: '/article',
          type: 'nuxtlink',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: $color-main3;
  height: $header-height;

  padding: 0.3rem;
}

.linkWrapper {
  a:not(:last-child) {
    padding-right: 0.6rem;
  }

  margin-right: 1rem;
}

.logo {
  width: 2.4em;
  height: 2.4em;
}
</style>
