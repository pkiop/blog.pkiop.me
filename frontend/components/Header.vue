<template>
  <header>
    <a href="/">
      <img class="logo" :src="logo" />
    </a>
    <div class="linkWrapper">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/editpost">editpost</NuxtLink>
      <NuxtLink to="/article">article</NuxtLink>
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
    };
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: $yellowsa;

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
