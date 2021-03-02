<template>
  <select
    v-model="selectedItem"
    class="edit-post-category-select"
    @change="changeOption($event)"
  >
    <option v-for="item in categoryList" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CategorySelect',
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    changeOption(event) {
      console.log('value : ', this.selectedItem);
      console.log('changed');
    },
  },
};
</script>

<style lang="scss">
.edit-post-category-select {
  width: 3rem;
  color: white;
  border: 1px solid white;
  text-align-last: center; // partial solution only chrome
}
</style>
