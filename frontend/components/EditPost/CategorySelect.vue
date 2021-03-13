<template>
  <dlv class="category-select-wrapper">
    <select
      v-model="selectedItem"
      class="edit-post-category-select"
      @change="changeOption($event)"
    >
      <option
        v-for="item in categoryList"
        :key="item.id"
        :value="item.name"
        :selected="item.name === originMainCategory"
      >
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
        :selected="item.name === originSubCategory"
      >
        {{ item.name }}
      </option>
    </select>
  </dlv>
</template>

<script>
export default {
  name: 'CategorySelect',
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
    originMainCategory: {
      type: String,
      default: null,
    },
    originSubCategory: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedItem: null,
      selectedSubItem: null,
      selectedSubCategoryList: [],
    };
  },
  mounted() {
    if (this.originMainCategory) {
      this.$store.commit('editpost/setMainCategory', this.originMainCategory);
      this.selectedItem = this.originMainCategory;
    }
    if (this.originSubCategory) {
      this.$store.commit('editpost/setSubCategory', this.originSubCategory);
      this.selectedItem = this.originSubCategory;
    }
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
  margin: 1rem;
  width: 6rem;
  height: 2rem;
  font-size: 2rem;
  color: white;
  border: 1px solid white;
  text-align-last: center; // partial solution only chrome
}

.edit-post-sub-category-select {
  margin: 1rem;
  height: 2rem;
  font-size: 2rem;
  color: white;
  border: 1px solid white;
  text-align-last: center; // partial solution only chrome
}

.category-select-wrapper {
  display: flex;
}
</style>
