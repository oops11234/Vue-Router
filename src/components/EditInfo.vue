<template>
  <div class="edit__wrapper">
    <div class="edit__header">編輯會員資料</div>
    <div class="edit__body">
      <div class="edit__pic">
        <img
          class="edit__img"
          :src="getPersonInfo.picture.large"
          :alt="getPersonInfo.name.first"
          width="100"
          height="100"
        />
        <input
          class="edit__file"
          type="file"
          accept="image/png,image/jpeg,image/gif"
          value="選擇檔案"
        />
      </div>
      <div class="edit__info">
        <div class="edit__row">
          <label for="FirstName">
            <p class="edit__label">First Name</p>
            <input
              class="edit__input"
              type="text"
              id="FirstName"
              :value="getPersonInfo.name.first"
            />
          </label>
          <label for="LastName">
            <p class="edit__label">Last Name</p>
            <input
              class="edit__input"
              type="text"
              id="LastName"
              :value="getPersonInfo.name.last"
            />
          </label>
        </div>
        <div class="edit__row-full">
          <label for="Birth">
            <p class="edit__label">Birth</p>
            <input
              class="edit__input"
              type="text"
              id="Birth"
              :value="getPersonInfo.dob.date"
            />
          </label>
        </div>
        <div class="edit__row">
          <label for="Email">
            <p class="edit__label">Email</p>
            <input
              class="edit__input"
              type="text"
              id="Email"
              :value="getPersonInfo.email"
            />
          </label>
          <div>
            <p class="edit__label">Gender</p>
            <label for="Male">
              <input
                type="radio"
                id="Male"
                name="gender"
                value="male"
                :checked="getPersonInfo.gender === 'male'"
              />
              Male
            </label>
            <label for="Female">
              <input
                type="radio"
                id="Female"
                name="gender"
                value="female"
                :checked="getPersonInfo.gender === 'female'"
              />
              Female
            </label>
          </div>
        </div>
        <div class="edit__row">
          <label for="Country">
            <p class="edit__label">Country</p>
            <input
              class="edit__input"
              type="text"
              id="Country"
              :value="getPersonInfo.location.country"
            />
          </label>
          <label for="State">
            <p class="edit__label">State</p>
            <input
              class="edit__input"
              type="text"
              id="State"
              :value="getPersonInfo.location.state"
            />
          </label>
        </div>
        <div class="edit__row">
          <label for="City">
            <p class="edit__label">City</p>
            <input
              class="edit__input"
              type="text"
              id="City"
              :value="getPersonInfo.location.city"
            />
          </label>
          <label for="Street">
            <p class="edit__label">Street</p>
            <input
              class="edit__input"
              type="text"
              id="Street"
              :value="getPersonInfo.location.street.name"
            />
          </label>
        </div>
        <div class="edit__row">
          <label for="Number">
            <p class="edit__label">Number</p>
            <input
              class="edit__input"
              type="text"
              id="Number"
              :value="getPersonInfo.location.street.number"
            />
          </label>
        </div>
        <div class="edit__row-full">
          <p class="edit__label">Coordinates</p>
          <div class="edit__row">
            <input
              class="edit__input"
              type="text"
              id="Number"
              :value="getPersonInfo.location.coordinates.latitude"
            />
            <input
              class="edit__input"
              type="text"
              id="Number"
              :value="getPersonInfo.location.coordinates.longitude"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="edit__footer">
      <input class="btn btn-confirm" type="button" value="確定" disabled />
      <input
        class="btn btn-cancel"
        type="button"
        value="取消"
        @click="setPersonInfo({})"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getPersonInfo']),
  },
  methods: {
    ...mapActions(['setPersonInfo']),
  },
};
</script>

<style>
.edit {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.7);
}

.edit__wrapper {
  width: 715px;
  background-color: white;
  border-radius: 5px;
}

.edit__header {
  padding: 15px;
  color: white;
  background-color: #666;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.edit__body {
  display: flex;
  padding: 15px;
}

.edit__pic {
  width: 230px;
}

.edit__img {
  display: block;
  width: auto;
  height: auto;
  margin-bottom: 15px;
}

.edit__file {
  font-size: 15px;
}

.edit__info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px 30px;
  padding-right: 15px;
}

.edit__row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
}

.edit__row-full {
  width: 100%;
}

.edit__label {
  margin-bottom: 10px;
}

.edit__input {
  width: 100%;
  padding: 10px 7px;
  font-size: 16px;
  border: 2px solid #e4e7eb;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
}

.edit__footer {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

.btn-confirm,
.btn-cancel {
  padding-left: 18px;
  padding-right: 18px;
  color: white;
}

.btn-confirm {
  background-color: #2597c7;
}

.btn-cancel {
  background-color: #6c757d;
}
</style>
