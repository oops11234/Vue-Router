<template>
  <table class="table">
    <thead class="table__thead">
      <tr class="table__tr">
        <th class="table__th">自選清單</th>
        <th class="table__th">照片</th>
        <th class="table__th">帳號</th>
        <th class="table__th">姓名</th>
        <th class="table__th table__th-medium">性別</th>
        <th class="table__th table__th-medium">年齡</th>
        <th class="table__th">國籍</th>
        <th class="table__th table__th-large">電子郵件</th>
        <th class="table__th">編輯</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <tr
        class="table__tr"
        :class="{ 'table__tr-even': index % 2 }"
        v-for="(item, index) in parentData"
        :key="item.login.uuid"
      >
        <td class="table__td table__td-center">
          <input
            type="checkbox"
            @change="$emit('changeCheckboxStatus', item.login.uuid)"
            :checked="getSelected.filter((e) => e === item.login.uuid).length"
          />
        </td>
        <td class="table__td table__td-center">
          <img
            class="table__img"
            :src="item.picture.thumbnail"
            :alt="item.name.first"
            width="100"
            height="100"
            loading="lazy"
          />
        </td>
        <td class="table__td table__td-padding">{{ item.login.username }}</td>
        <td class="table__td table__td-padding">{{ item.name.first }} {{ item.name.last }}</td>
        <td class="table__td table__td-center">{{ item.gender }}</td>
        <td class="table__td table__td-center">
          {{ item.dob.age }}
        </td>
        <td class="table__td table__td-center">{{ item.location.country }}</td>
        <td class="table__td table__td-padding">{{ item.email }}</td>
        <td class="table__td table__td-center table__edit">
          <input
            class="btn btn-edit"
            type="button"
            value="編輯"
            @click="setPersonInfo(item)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    parentData: Array,
  },
  computed: {
    ...mapGetters(['getSelected']),
  },
  methods: {
    ...mapActions(['setPersonInfo']),
  },
};
</script>

<style>
.table {
  margin-top: 15px;
  width: 100%;
  border: 1px solid #d6d6d6;
}

.table__thead .table__tr {
  width: 100%;
  line-height: 40px;
  font-size: 15px;
  background-image: linear-gradient(white 0%, #dedede 100%);
  border-bottom: 2px solid #d6d6d6;
}

.table__tbody .table__tr {
  border: 1px solid #d6d6d6;
}

.table__tbody .table__tr:hover {
  background-color: #fff4d2;
}

.table__tbody .table__tr-even {
  background-color: #f9f9f9;
}

.table__th-large {
  width: 270px;
}

.table__th-medium {
  width: 90px;
}

.table__img {
  width: auto;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
}

.table__td {
  vertical-align: middle;
}

.table__td-center {
  text-align: center;
}

.table__td-padding {
  padding-left: 10px;
}

.table__edit {
  padding-right: 5px;
}

.btn-edit {
  font-size: 15px;
  color: white;
  background-color: #dc3545;
}
</style>
