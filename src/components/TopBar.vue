<template>
  <div class="topbar">
    <router-link to="/">
      <img
        class="topbar__logo"
        src="@/assets/img/logo.png"
        alt="logo"
        width="100"
        height="100"
      />
    </router-link>
    <div class="topbar__menu" v-if="token">
      <router-link
        class="topbar__btn"
        :class="{ 'topbar__btn-active': $route.path === '/' }"
        type="button"
        to="/"
        >首頁
      </router-link>
      <router-link
        class="topbar__btn"
        :class="{ 'topbar__btn-active': $route.path === '/admin' }"
        type="button"
        to="/admin"
        >會員列表
      </router-link>
      <router-link
        class="topbar__btn"
        :class="{ 'topbar__btn-active': $route.path === '/customer' }"
        type="button"
        to="/customer"
        v-if="getSelected.length"
        >自選清單
      </router-link>
    </div>
    <input
      class="btn btn-logout"
      type="button"
      value="登出"
      @click="logout"
      v-if="token"
    />
    <input
      class="btn btn-login"
      type="button"
      value="登入"
      @click="$router.push('/login')"
      v-else
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Cookie from 'js-cookie';

export default {
  data() {
    return {
      token: Cookie.get('token'),
    };
  },
  computed: {
    ...mapGetters(['getSelected']),
  },
  methods: {
    // 清空token並導至首頁
    logout() {
      Cookie.remove('token');
      this.token = Cookie.get('token');
      if (this.$route.path !== '/') this.$router.push('/');
    },
  },
};
</script>

<style>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
}

.topbar__logo {
  width: auto;
  height: 100%;
  cursor: pointer;
}

.topbar__logo:hover {
  filter: brightness(130%);
}

.btn-logout {
  color: white;
  background-color: #2597c7;
}

.btn-login {
  background-color: #f6f6f6;
}

.topbar__menu {
  position: absolute;
  left: 50%;
  display: flex;
  gap: 10px;
  transform: translateX(-50%);
}

.topbar__btn {
  font-size: 15px;
  color: #999;
  text-decoration: none;
}

.topbar__btn-active,
.topbar__btn:hover {
  color: white;
}
</style>
