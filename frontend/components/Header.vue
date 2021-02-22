<template>
  <header>
    <a href="/">
      <img class="logo" :src="logo" />
    </a>
    <div class="linkWrapper">
      <NuxtLink v-if="AUTH_ENV" to="/editpost">Editpost</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/article">Article</NuxtLink>
    </div>
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
    };
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: $color-main3;

  padding: 0.3rem;
}

.linkWrapper {
  a:not(:last-child) {
    padding-right: 0.6rem;
  }
}

.logo {
  width: 40px;
  height: 40px;
}
</style>
