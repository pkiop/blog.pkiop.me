<template>
  <header>
    <div>App</div>
    <NuxtLink to="/">Home page</NuxtLink>
    <NuxtLink to="/article">article</NuxtLink>
    <NuxtLink to="/article/1">article 1</NuxtLink>
    <NuxtLink to="/article/2">article 2</NuxtLink>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
}
</script>
