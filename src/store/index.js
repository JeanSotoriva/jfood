import { createStore } from 'vuex'
import companies from './modules/companies'
import { state, mutations } from './default'

const store = createStore({
  modules: {
    companies
  },
  state,
  mutations
})

export default store