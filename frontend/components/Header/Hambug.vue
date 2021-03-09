<template>
  <div class="header-hambug">
    <div v-for="link in linkList" :key="link.id" class="header-hambug-block">
      <a v-if="link.type === 'a'" :href="link.url"> {{ link.text }} </a>
      <NuxtLink v-if="link.type === 'nuxtlink'" :to="link.url">
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'HeaderHambug',
  components: {},
  props: {
    linkList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      logo,
      AUTH_ENV: process.env.AUTH_ENV === 'admin',
      isMobile: undefined,
    };
  },
};
</script>

<style lang="scss">
.header-hambug {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;

  display: flex;
  flex-direction: column;
  background-color: skyblue;

  .header-hambug-block {
    height: 3rem;
    font-size: 2rem;
  }

  z-index: 10;
}
</style>
