import { createStore } from 'vuex'
import { includes } from 'lodash-es'
import auth from './modules/auth'

const store = createStore({
  state: {
    pageReaded: {
      important: false,
      rules: false,
    },
  },
  mutations: {
    SET_PAGE_READED: (state, page) => {
      state.pageReaded[page] = true
    },
  },
  actions: {},
  modules: {
    auth,
  },
  getters: {
    haveNoReaded: (state) => {
      const res = includes(state.pageReaded, false)
      return res
    },
  },
})

export default store
