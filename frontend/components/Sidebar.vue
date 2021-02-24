<template>
  <div class="sidebar">
    <div>
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
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
