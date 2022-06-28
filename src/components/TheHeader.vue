<template>
  <header class="header">
    <h1 class="header__title">{{ parentTitle }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    parentTitle: String,
  },
};
</script>

<style>
.header__title {
  font-size: 34px;
  font-weight: 900;
  text-align: center;
}
</style>
