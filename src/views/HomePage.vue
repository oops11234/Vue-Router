<template>
  <div class="home">
    <TopBar />
    <div class="container mx-auto">
      <TheHeader parent-title="前端開發人力仲介" />
      <ListItem :parent-page-data="pageData" />
      <NavButton
        :parent-page-num="pageNum"
        :parent-current-page="currentPage"
        @setCurrentPage="setCurrentPage"
      />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import TheHeader from '@/components/TheHeader.vue';
import ListItem from '@/components/ListItem.vue';
import NavButton from '@/components/NavButton.vue';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  components: {
    TopBar,
    TheHeader,
    ListItem,
    NavButton,
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      dataSize: 20,
      // 用以判斷GoogleMap是否顯示
    };
  },
  computed: {
    pageData() {
      return this.data.filter(
        (e, index) => index >= this.dataSize * (this.currentPage - 1)
          && index < this.dataSize * this.currentPage,
      );
    },
    pageNum() {
      return Math.ceil(this.data.length / this.dataSize);
    },
  },
  methods: {
    ...mapActions(['setIsShow']),
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
  async created() {
    try {
      this.setIsShow();
      this.data = await axios.get('https://randomuser.me/api/?seed=foobar&results=150')
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
      this.setIsShow();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
</style>
