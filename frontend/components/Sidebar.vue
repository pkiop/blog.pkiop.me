<template>
  <div class="sidebar">
    <div>
      {{ mainCategory }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      mainCategory: 'main category',
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  display: flex;
  width: $sidebar-width;

  background-color: white;

  & > div {
    color: black;
  }
}
</style>
