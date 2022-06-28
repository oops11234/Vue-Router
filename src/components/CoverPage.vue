<template>
  <div class="cover" @click.self="setPersonInfo({})">
    <component :is="this.$route.path === '/' ? 'GoogleMap' : 'EditInfo'" />
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import EditInfo from '@/components/EditInfo.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    GoogleMap,
    EditInfo,
  },
  methods: {
    ...mapActions(['setPersonInfo']),
    keyupEvent(e) {
      if (e.key !== 'Escape') return;
      this.setPersonInfo({});
    },
  },
  created() {
    document.addEventListener('keyup', this.keyupEvent);
    document.body.style.overflowY = 'hidden';
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.keyupEvent);
    document.body.style.overflowY = 'unset';
  },
};
</script>

<style>
.cover {
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
</style>
