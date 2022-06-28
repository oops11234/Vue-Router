<script>
import TableLayout from '@/layout/TableLayout.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  extends: TableLayout,
  data() {
    return {
      title: '自選清單',
    };
  },
  watch: {
    // 若頁面資料為空，且篩選後確實有資料，則將當前頁次-1
    pageData(value) {
      if (!value.length && this.filterData.length) this.currentPage -= 1;
    },
    // 若Vuex中的selected陣列為空，將頁面導至'會員列表'，若不為空則將data換成已勾選的資料
    getSelected(value) {
      if (value.length === 0) this.$router.push('admin');
      this.selectedData();
    },
  },
  computed: {
    ...mapGetters(['getSelected']),
  },
  methods: {
    // 將data和Vuex中的selected做比對，換成已勾選的資料
    selectedData() {
      const arr = [];
      this.data.some((e) => {
        this.getSelected.forEach((i) => {
          if (e.login.uuid === i) {
            arr.push(e);
          }
        });
        return arr.length === this.getSelected.length;
      });
      this.data = arr;
    },
  },
  async created() {
    try {
      this.setIsShow();
      this.data = await axios.get('https://randomuser.me/api/?seed=foobar&results=150')
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
      this.selectedData();
      this.setIsShow();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
