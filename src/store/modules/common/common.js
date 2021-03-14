const state = () => ({
  notification: {},
  errors: []
})

const getters = {
  GET_NOTIFICATION: state => state.notification,
  GET_ERRORS: state => state.errors
}

const mutations = {
  SET_NOTIFICATION (state, value) {
    state.notification = value
  },
  SET_ERRORS (state, value) {
    state.errors = value
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
