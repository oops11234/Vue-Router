<template>
  <nav class="nav">
    <input
      class="btn btn-pre"
      type="button"
      value="<<"
      @click="handleClick(parentCurrentPage - 1)"
      :disabled="parentCurrentPage === 1"
    />
    <input
      class="btn btn-nav"
      :class="{ 'btn--active': item === parentCurrentPage }"
      type="button"
      v-for="(item, index) in parentPageNum"
      :key="index"
      :value="item"
      @click="handleClick(item)"
    />
    <input
      class="btn btn-next"
      type="button"
      value=">>"
      @click="handleClick(parentCurrentPage + 1)"
      :disabled="parentCurrentPage === parentPageNum"
    />
  </nav>
</template>

<script>
export default {
  props: {
    parentPageNum: Number,
    parentCurrentPage: Number,
  },
  methods: {
    handleClick(page) {
      this.$emit('setCurrentPage', page);
    },
  },
};
</script>

<style>
.nav {
  margin-top: 30px;
  text-align: center;
}

.btn-pre,
.btn-next,
.btn-nav {
  background-color: white;
  border: 1px solid #ddd;
  border-left: 0;
  transition: 0.3s;
}

.btn-pre {
  border-left: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
}

.btn-next {
  border-radius: 0 5px 5px 0;
}

.btn-nav {
  border-radius: 0;
}

.btn--active,
.btn-nav:hover {
  color: white;
  background-color: #2597c7;
}
</style>
