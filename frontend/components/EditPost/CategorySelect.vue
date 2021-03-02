<template>
  <fragment>
    <select
      v-model="selectedItem"
      class="edit-post-category-select"
      @change="changeOption($event)"
    >
      <option v-for="item in categoryList" :key="item.id" :value="item.name">
        {{ item.name }}
      </option>
    </select>
    <select
      v-model="selectedSubItem"
      class="edit-post-sub-category-select"
      @change="changeSubCategory($event)"
    >
      <option
        v-for="item in selectedSubCategoryList"
        :key="item.id"
        :value="item.name"
      >
        {{ item.name }}
      </option>
    </select>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'CategorySelect',
  components: { Fragment },
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedItem: null,
      selectedSubItem: null,
      selectedSubCategoryList: [],
    };
  },
  methods: {
    changeOption(event) {
      this.selectedSubCategoryList = this.categoryList.find((el) => {
        if (el.name === this.selectedItem) {
          return true;
        }
        return false;
      }).sub;
    },
    changeSubCategory(event) {
      this.$store.commit('editpost/setMainCategory', this.selectedItem);
      this.$store.commit('editpost/setSubCategory', this.selectedSubItem);
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

.edit-post-sub-category-select {
  width: 3rem;
  color: white;
  border: 1px solid white;
  text-align-last: center; // partial solution only chrome
}
</style>
