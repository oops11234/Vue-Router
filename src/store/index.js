import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShow: false,
    email: '',
    password: '',
    personInfo: {},
    selected: [],
  },
  getters: {
    getIsShow(state) {
      return state.isShow;
    },
    getEmail(state) {
      return state.email;
    },
    getPassword(state) {
      return state.password;
    },
    getPersonInfo(state) {
      return state.personInfo;
    },
    getSelected(state) {
      return state.selected;
    },
  },
  mutations: {
    SET_IS_SHOW(state) {
      state.isShow = !state.isShow;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_PASSWORD(state, password) {
      state.password = password;
    },
    SET_PERSON_INFO(state, item) {
      state.personInfo = item;
    },
    SET_SELECTED(state, arr) {
      if (typeof arr === 'string') {
        const index = state.selected.indexOf(arr);
        index === -1 ? state.selected.push(arr) : state.selected.splice(index, 1);
        localStorage.setItem('selected', JSON.stringify(state.selected));
      } else {
        state.selected = arr;
      }
    },
  },
  actions: {
    setIsShow({ commit }) {
      commit('SET_IS_SHOW');
    },
    setEmail({ commit }, email) {
      commit('SET_EMAIL', email);
    },
    setPassword({ commit }, password) {
      commit('SET_PASSWORD', password);
    },
    setPersonInfo({ commit }, item) {
      commit('SET_PERSON_INFO', item);
    },
    setSelected({ commit }, ...id) {
      commit('SET_SELECTED', ...id);
    },
  },
});
