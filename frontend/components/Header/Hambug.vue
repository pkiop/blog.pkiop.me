<template>
  <div class="header-hambug">
    <input id="hambug" type="checkbox" />
    <div class="header-dropdown">
      <label class="hambug-on-off" for="hambug" />
      <div class="hambug-click-dropdown">
        <div
          v-for="link in linkList"
          :key="link.id"
          class="header-hambug-block"
        >
          <a v-if="link.type === 'a'" :href="link.url"> {{ link.text }} </a>
          <NuxtLink v-if="link.type === 'nuxtlink'" :to="link.url">
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
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
  height: 3rem;
  width: 3rem;

  display: flex;
  flex-direction: column;

  #hambug {
    width: 0px;
    height: 0px;
    padding: 0px;
    margin: 0px;
  }

  .header-hambug-block {
    font-size: 2rem;
    padding: 0.6rem;
    a {
      font-size: 0;
    }
  }

  #hambug:checked ~ .header-dropdown {
    a {
      font-size: 2rem;
    }
  }

  .hambug-click-dropdown {
    position: absolute;

    top: 3rem;
    right: 0.2rem;
    background-color: black;
  }

  .hambug-on-off {
    background-image: url('~@/assets/hambug.png');
    display: inline-block;
    cursor: pointer;
    line-height: 22px;
    padding-left: 2.6rem;
    padding-top: 2.6rem;
    background-size: contain;
    background-repeat: no-repeat;
  }

  z-index: 10;
}
</style>
