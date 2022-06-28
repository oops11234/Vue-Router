<template>
  <div class="member">
    <TopBar />
    <div class="container mx-auto">
      <TheHeader :parent-title="title" />
      <div class="filter">
        <div class="filter__header">
          <SelectOption
            parent-placeholder="全部國家"
            :parent-arr="countryArr"
            :parent-value="currentCountry"
            @handleChange="setCountry"
          />
          <SelectOption
            parent-placeholder="全部性別"
            :parent-arr="genderArr"
            :parent-value="currentGender"
            @handleChange="setGender"
          />
        </div>
        <div class="filter__footer">
          <p>
            <span v-if="currentCountry || currentGender">
              篩選結果：{{ filterData.length }}人，
            </span>
            共：{{ data.length }}人
          </p>
        </div>
      </div>
      <TableList
        :parent-data="pageData"
        @changeCheckboxStatus="changeCheckboxStatus"
      />
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
import SelectOption from '@/components/SelectOption.vue';
import TableList from '@/components/TableList.vue';
import NavButton from '@/components/NavButton.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    TopBar,
    TheHeader,
    SelectOption,
    TableList,
    NavButton,
  },
  data() {
    return {
      data: [],
      currentCountry: '',
      currentGender: '',
      currentPage: 1,
      dataSize: 10,
    };
  },
  watch: {
    // 將篩選後的頁次設為1
    currentCountry() {
      this.currentPage = 1;
      this.currentGender = '';
    },
    // 將篩選後的頁次設為1
    currentGender() {
      this.currentPage = 1;
    },
  },
  computed: {
    // 篩選的國家
    countryArr() {
      return [...new Set(this.data.map((e) => e.location.country))];
    },
    // 篩選的性別
    genderArr() {
      return [...new Set(this.data.map((e) => e.gender))];
    },
    // 篩選後的資料(若無篩選則是所有資料)
    filterData() {
      let arr = [];
      if (this.currentCountry && this.currentGender) {
        arr = this.data.filter(
          (e) => e.location.country === this.currentCountry && e.gender === this.currentGender,
        );
      } else if (this.currentCountry && !this.currentGender) {
        arr = this.data.filter((e) => e.location.country === this.currentCountry);
      } else if (!this.currentCountry && this.currentGender) {
        arr = this.data.filter((e) => e.gender === this.currentGender);
      } else {
        arr = this.data;
      }
      return arr;
    },
    // 顯示的頁面資料(每一頁有十筆)
    pageData() {
      return this.filterData.filter(
        (e, index) => index >= this.dataSize * (this.currentPage - 1)
          && index < this.dataSize * this.currentPage,
      );
    },
    // 頁次數量
    pageNum() {
      return Math.ceil(this.filterData.length / this.dataSize);
    },
  },
  methods: {
    ...mapActions(['setIsShow', 'setSelected']),
    // 更改篩選的國家
    setCountry(country) {
      this.currentCountry = country;
    },
    // 更改篩選的性別
    setGender(gender) {
      this.currentGender = gender;
    },
    // 更改現在的頁次
    setCurrentPage(page) {
      this.currentPage = page;
    },
    // 將變更後的自選清單存至Vuex
    changeCheckboxStatus(id) {
      this.setSelected(id);
    },
  },
};
</script>

<style>
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.filter__header,
.filter__footer {
  display: flex;
  gap: 15px;
}

.filter__footer {
  font-size: 15px;
}
</style>
