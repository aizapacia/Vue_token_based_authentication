import { createStore } from 'vuex'
import axios from 'axios'

const apiLink = 'http://127.0.0.1:8000/api'

export default createStore({
  state: {
    user: null,
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user')
      location.reload()
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios.post(apiLink + '/register', credentials).then(({ data }) => {
        console.log(data)
        commit('SET_USER_DATA', data)
      })
    },
    login({ commit }, credentials) {
      return axios.post(apiLink + '/login', credentials).then(({ data }) => {
        console.log(data)
        commit('SET_USER_DATA', data)
      })
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    },
  },
  modules: {},
})
