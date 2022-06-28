<script>
import TableLayout from '@/layout/TableLayout.vue';
import axios from 'axios';

export default {
  extends: TableLayout,
  data() {
    return {
      title: '會員列表',
    };
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
