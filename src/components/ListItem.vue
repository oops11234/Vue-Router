<template>
  <main class="list">
    <div class="list__row">
      <div
        class="card"
        v-for="item in parentPageData"
        :key="item.id.value"
        @click="setPersonInfo(item)"
      >
        <div class="card__wrapper">
          <div class="card__icon card__icon-male" v-if="item.gender === 'male'">
            <img
              class="icon"
              src="@/assets/img/male.png"
              alt="male"
              width="100"
              height="100"
            />
          </div>
          <div class="card__icon card__icon-female" v-else>
            <img
              class="icon"
              src="@/assets/img/female.png"
              alt="female"
              width="100"
              height="100"
            />
          </div>
          <img
            class="card__img"
            :src="item.picture.large"
            :alt="item.name.first"
            width="100"
            height="100"
            loading="lazy"
          />
          <h4 class="card__name">{{ item.name.first }} {{ item.name.last }}</h4>
        </div>
        <p class="card_location">{{ item.location.country }}</p>
        <p class="card_location">{{ item.location.city }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    parentPageData: Array,
  },
  methods: {
    ...mapActions(['setPersonInfo']),
  },
};
</script>

<style>
.list {
  margin-top: 35px;
}

.list__row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.card {
  padding: 15px;
  border-radius: 3px;
}

.card:hover {
  background-color: #fff4d2;
  cursor: pointer;
}

.card__wrapper {
  position: relative;
  margin-bottom: 2px;
}

.card__icon {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 3px;
}

.icon {
  width: 100%;
  height: 100%;
  filter: invert(100%);
}

.card__icon-male {
  background-color: rgba(127, 202, 255, 0.7);
}

.card__icon-female {
  background-color: rgba(241, 113, 188, 0.7);
}

.card__img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}

.card__name {
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  padding: 5px 7px;
  color: white;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 3px 3px;
  box-sizing: border-box;
  overflow: hidden;
}

.card_location {
  line-height: 1.1;
  font-size: 12px;
  color: #b2aba7;
}
</style>
