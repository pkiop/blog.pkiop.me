<template>
  <div>
    <div v-for="link in linkList" :key="link.id" class="header-hambug">
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
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  width: 200px;
}
</style>
