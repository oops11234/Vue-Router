<template>
  <select class="select" :value="parentValue" @change="handleChange($event)">
    <option class="select__option" value="" selected>
      {{ parentPlaceholder }}
    </option>
    <option
      class="select__option"
      v-for="(item, index) in parentArr"
      :value="item"
      :key="index"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    parentPlaceholder: String,
    parentArr: Array,
    parentValue: String,
  },
  methods: {
    handleChange(e) {
      this.$emit('handleChange', e.target.value);
    },
  },
};
</script>

<style>
.select {
  padding: 10px 10px;
  font-size: 15px;
  background-color: #eee;
  border-radius: 3px;
  border: none;
  outline: none;
}

.select__option {
  background-color: #eee;
}
</style>
