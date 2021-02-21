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

  background-color: $color-yellow;

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
