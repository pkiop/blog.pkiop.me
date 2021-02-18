<template>
  <header>
    <div>Header</div>
    <NuxtLink to="/">Home page</NuxtLink>
    <NuxtLink to="/addpost">addpost</NuxtLink>
    <NuxtLink to="/article">article</NuxtLink>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: gray;
  padding: 1rem 2rem;
}
</style>
