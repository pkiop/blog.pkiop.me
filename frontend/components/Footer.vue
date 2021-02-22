<template>
  <footer>
    <div>© 2021 pkiop. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;

  left: 0;
  bottom: 0;

  width: 100%;

  display: flex;
  justify-content: center;

  background-color: $color-main2;
  padding: 1rem 2rem;
}
</style>
