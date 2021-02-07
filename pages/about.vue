<template>
  <div>
    <h1>About page</h1>
    <p>this app display about</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About us',
      meta: [
        {
          hid: 'discription',
          name: 'discription',
          content: 'best place for dadjokes',
        },
      ],
    }
  },
}
</script>

<style></style>
