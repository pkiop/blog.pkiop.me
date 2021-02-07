<template>
  <v-main>
    <HeaderBar />
    <v-container>
      <nuxt />
    </v-container>
    <footer>FOOTER</footer>
  </v-main>
</template>

<script lang="ts">
import HeaderBar from '../components/organisms/HeaderBar.vue'
export default {
  components: {
    HeaderBar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
