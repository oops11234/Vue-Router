<template>
  <div id="app">
    <TheLoading v-if="getIsShow" />
    <router-view />
    <CoverPage v-if="JSON.stringify(getPersonInfo) !== '{}'" />
  </div>
</template>

<script>
import TheLoading from '@/components/TheLoading.vue';
import CoverPage from '@/components/CoverPage.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    TheLoading,
    CoverPage,
  },
  computed: {
    ...mapGetters(['getIsShow', 'getPersonInfo']),
  },
  methods: {
    ...mapActions(['setSelected']),
  },
  async created() {
    try {
      // 從localStorage取data放到vuex中
      if (localStorage.getItem('selected')) {
        this.setSelected(JSON.parse(localStorage.getItem('selected')));
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 500px;
}

.container {
  max-width: 1200px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.btn {
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
}

.btn:disabled {
  opacity: 0.5;
  cursor: no-drop;
}

.btn:not(:disabled):hover {
  filter: brightness(110%);
}
</style>
