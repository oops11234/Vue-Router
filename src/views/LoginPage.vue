<template>
  <div class="login">
    <div class="login__info">
      <p>帳號：{{ getEmail }}</p>
      <p>密碼：{{ getPassword }}</p>
    </div>
    <div class="login__wrapper">
      <img
        class="login__logo"
        src="@/assets/img/logo.png"
        alt="logo"
        width="100"
        height="100"
      />
      <p class="login__text">請登入</p>
      <form @submit.prevent="handleSubmit">
        <div class="login__form">
          <label for="Mail">
            <input
              class="login__mail"
              id="Mail"
              type="email"
              placeholder="電子郵件"
              v-model="mail"
              required
            />
          </label>
          <label for="Pwd">
            <input
              class="login__pwd"
              id="Pwd"
              type="password"
              placeholder="密碼"
              v-model="pwd"
              required
            />
          </label>
        </div>
        <div class="login__btn">
          <input class="btn btn-submit" type="submit" value="送出" />
          <input
            class="btn btn-clear"
            type="reset"
            value="清除"
          />
        </div>
      </form>
    </div>
    <p class="login__status login__status-success" v-if="loginStatus === 1">
      登入成功
    </p>
    <p class="login__status login__status-fail" v-if="loginStatus === 2">
      帳號或密碼有誤，請重新輸入！
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Cookie from 'js-cookie';
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      // 用以判斷右上角提示什麼資訊
      loginStatus: 0,
      mail: '',
      pwd: '',
      timer: null,
    };
  },
  computed: {
    ...mapGetters(['getEmail', 'getPassword']),
    // 設定cookie時效為一天
    expiresTime() {
      const now = new Date();
      const expireTime = now.getTime() + 1000 * 60 * 60 * 24;
      now.setTime(expireTime);
      return now;
    },
  },
  methods: {
    ...mapActions(['setIsShow', 'setEmail', 'setPassword']),
    async handleSubmit() {
      try {
        const data = await axios.get('https://randomuser.me/api/?seed=foobar')
          .then((res) => res.data.results)
          .catch((err) => console.log(err));
        if (this.mail === data[0].email && this.pwd === data[0].login.password) {
          this.loginStatus = 1;
          // 若登入成功，則右上角提示會顯示一秒後前往首頁(並將token存在Cookie)
          setTimeout(() => {
            Cookie.set('token', data[0].login.sha256, { expires: this.expiresTime });
            this.$router.push({ path: '/admin' });
          }, 1000);
        } else {
          this.loginStatus = 2;
          // 若登入失敗，則右上角提示會顯示3秒後隱藏
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            this.loginStatus = 0;
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      // 發送請求獲取資料
      this.setIsShow();
      const data = await axios
        .get('https://randomuser.me/api/?seed=foobar')
        .then((res) => res.data.results)
        .catch((err) => console.log(err));
      // 把email、password放到vuex中
      this.setEmail(data[0].email);
      this.setPassword(data[0].login.password);
      this.setIsShow();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.login {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.login__info {
  position: absolute;
  top: 10px;
  left: 10px;
  line-height: 1.2;
  font-size: 15px;
}

.login__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.login__logo {
  width: auto;
  height: 100%;
}

.login__text {
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 20px;
}

.login__form {
  position: relative;
}

.login__mail,
.login__pwd {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  outline: none;
  box-sizing: border-box;
}

.login__mail {
  border-radius: 3px 3px 0 0;
}

.login__pwd {
  margin-top: -1px;
  border-radius: 0 0 3px 3px;
}

.login__btn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-top: 15px;
  margin-bottom: 50px;
}

.btn-submit {
  color: white;
  background-color: #2597c7;
  border-radius: 3px 0 0 3px;
}

.btn-clear {
  color: #2597c7;
  border: 1px solid #2597c7;
  border-radius: 0 3px 3px 0;
}

.login__copyright {
  font-size: 15px;
  color: #999;
}

.login__status {
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  font-size: 15px;
  color: white;
}

.login__status-success {
  background-color: #198753;
}

.login__status-fail {
  background-color: #dc3545;
}
</style>
