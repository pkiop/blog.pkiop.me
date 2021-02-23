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
  position: absolute;
  display: flex;
  width: $sidebar-width;
  @media only screen and (max-width: 768px) {
    width: $sidebar-width-mobile;
  }
  height: 100%;
  background-color: white;
}
</style>
