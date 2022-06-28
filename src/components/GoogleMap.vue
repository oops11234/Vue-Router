<template>
  <div class="map__wrapper mx-auto">
    <div class="map__info">
      <img :src="getPersonInfo.picture.large" :alt="getPersonInfo.name.first" />
      <div>
        <p>
          {{ getPersonInfo.name.first }}
          {{ getPersonInfo.name.last }}
        </p>
        <p>{{ getPersonInfo.gender }}</p>
        <p>{{ getPersonInfo.email }}</p>
        <p>{{ getPersonInfo.cell }}</p>
        <p>{{ getPersonInfo.dob.age }}</p>
      </div>
    </div>
    <GmapMap
      :center="{
        lat: Number(getPersonInfo.location.coordinates.latitude),
        lng: Number(getPersonInfo.location.coordinates.longitude),
      }"
      :options="options"
      style="width: 100%; height: 270px"
    >
      <GmapMarker
        :position="{
          lat: Number(getPersonInfo.location.coordinates.latitude),
          lng: Number(getPersonInfo.location.coordinates.longitude),
        }"
        :clickable="false"
        :draggable="false"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      options: {
        zoom: 4,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        disableDefaultUI: false,
        scrollwheel: true,
        clickableIcons: false,
      },
    };
  },
  computed: {
    ...mapGetters(['getPersonInfo']),
  },
};
</script>

<style>
.map {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.map__wrapper {
  width: 470px;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;
}

.map__info {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 1.5;
}
</style>
