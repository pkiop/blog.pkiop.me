<template>
  <div class="sidebar">사이드바</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      titleImage: '1',
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  width: $sidebar-width;

  background-color: white;
}
</style>
