<template>
  <div class="temppage"></div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/');
  },
};
</script>

<style lang="scss"> 
  .temppage {
    margin: 1em;
  }
</style>
