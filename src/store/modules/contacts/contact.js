import { getUsers } from 'src/Config/data'

const state = () => ({
  records: [],
  fetchingContacts: true,
  filterItem: null

})

const getters = {
  GET_FETCHING_CONTACTS: state => state.fetchingContacts,
  GET_CONTACTS: state => state.records,
  GET_FILTER_ITEM: state => state.filterItem
}

const mutations = {
  SET_FETCHING_CONTACTS (state, data) {
    state.fetchingContacts = data
  },
  SET_CONTACTS (state, data) {
    state.records = data
  },
  SET_ADDING_CONTACT (state, data) {
    state.records.unshift(data)
  },
  SET_EDIT_CONTACT (state, formItem) {
    // find the index of this ID's object
    const objIndex = state.records.findIndex(obj => obj.id === formItem.id)
    state.records[objIndex].id = formItem.id
    state.records[objIndex].name = formItem.name
    state.records[objIndex].avatar = formItem.avatar
    state.records[objIndex].email = formItem.email
    state.records[objIndex].companyName = formItem.companyName
    state.records[objIndex].role = formItem.role
    state.records[objIndex].forecast = formItem.forecast
    state.records[objIndex].recentAct = formItem.recentAct
  },
  SET_DELETE_CONTACT (state, selected) {
    selected.filter(item => {
      state.records.splice(state.records.indexOf(item), 1)
    })
  },
  SET_FILTER_ITEM (state, filterItem) {
    state.filterItem = filterItem
  }
}

const actions = {
  FETCH_CONTACTS (context) {
    context.commit('SET_FETCHING_CONTACTS', true)
    context.commit('SET_CONTACTS', getUsers)
    context.commit('SET_FETCHING_CONTACTS', false)
  },
  ADD_CONTACT (context, form) {
    context.commit('SET_ADDING_CONTACT', form)
  },
  EDIT_CONTACT (context, formItem) {
    context.commit('SET_EDIT_CONTACT', formItem)
  },
  DELETE_CONTACT (context, selected) {
    context.commit('SET_DELETE_CONTACT', selected)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
