import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    async getTodos({ commit }){
      return this.todos = await axios.get('http://localhost:3000/todos')
      .then((response) => {
        commit('storeTodos', response.data)
      })
    }
  },
  modules: {
  }
})
