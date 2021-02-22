import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  position: '重庆'
};

const mutation = {
  setPosition(state, val){
    state.position = val;
  }
};

const actions = {
  setPosition({commit}, val){
    //异步请求 获取当前位置信息 后端
    commit('setPosition', val);
  }
};

export default new Vuex.Store({
  state,
  mutation,
  actions
})
