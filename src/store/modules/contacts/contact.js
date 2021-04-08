const state = () => ({
  records: [
    {
      id: 1,
      name: 'Lindsey Stroud',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      email: 'Lindsey.stroud@gmail.com',
      companyName: 'Hatchbuck',
      role: 'Manager',
      forecast: '50',
      recentAct: '5 Minutes ago'
    },
    {
      id: 2,
      name: 'Nicci Troiani',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      email: 'nicci.troiani@gmail.com',
      companyName: 'Slack',
      role: 'Manager',
      forecast: '75',
      recentAct: '14 Minutes ago'
    },
    {
      id: 3,
      name: 'George Fields',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      email: 'george.fields@gmail.com',
      companyName: 'Clockify',
      role: 'CEO',
      forecast: '10',
      recentAct: '6 Hours ago'
    },
    {
      id: 4,
      name: 'Rebecca Mooore',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      email: 'rebecca.mooore@gmail.com',
      companyName: 'Trello',
      role: 'Engineer',
      forecast: '25',
      recentAct: 'Dec 14, 2018'
    },
    {
      id: 5,
      name: 'Jane Doe',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      email: 'jane.doe@gmail.com',
      companyName: 'Slack',
      role: 'Manager',
      forecast: '30',
      recentAct: 'Dec 12, 2018'
    },
    {
      id: 6,
      name: 'Jones Dermont',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      email: 'jones.dermont@gmail.com',
      companyName: 'Slack',
      role: 'Developer',
      forecast: '40',
      recentAct: 'Dec 11, 2018'
    },
    {
      id: 7,
      name: 'Martin Merces',
      email: 'martin.merces@gmail.com',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      companyName: 'Google',
      role: 'Manager',
      forecast: '60',
      recentAct: 'Dec 9, 2018'
    },
    {
      id: 8,
      name: 'Franz Ferdinand',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      email: 'franz.ferdinand@gmail.com',
      companyName: 'Facebook',
      role: 'Manager',
      forecast: '100',
      recentAct: 'Dec 6, 2018'
    },
    {
      id: 9,
      name: 'John Smith',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      email: 'john.smith@gmail.com',
      companyName: 'Skype',
      role: 'CEO',
      forecast: '75',
      recentAct: 'Nov 30, 2018'
    },
    {
      id: 10,
      name: 'Judith Williams',
      avatar: 'https://cdn.quasar.dev/img/avatar.png',
      email: 'judith.williams@gmail.com',
      companyName: 'Google',
      role: 'Designer',
      forecast: '45',
      recentAct: 'Nov 26, 2018'
    }
  ],
  fetchingContacts: false,
  addingContact: false
})

const getters = {
  GET_FETCHING_CONTACTS: state => state.fetchingContacts,
  GET_CONTACTS: state => state.contacts,
  GET_ADDING_CONTACTS: state => state.addingContact
}

// const mutations
