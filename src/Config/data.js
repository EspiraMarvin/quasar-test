export const getUsers = [
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
    name: 'Rebecca Moore',
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
]

export const getTasks = [
  {
    id: 1,
    title: 'Send benefit review by Sunday.',
    dueDate: '2018-12-23',
    assignee: {
      user_id: 1,
      fullName: 'George Fields',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
    },
    tag: 'Reminder',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Invite to office meet-up.',
    dueDate: '2018-12-23',
    assignee: {
      user_id: 4,
      fullName: 'Rebecca Moore',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
    },
    tag: 'Call',
    status: 'Ended'
  },
  {
    id: 3,
    title: 'Invite to office meet-up',
    dueDate: '2018-12-23',
    assignee: {
      user_id: 3,
      fullName: 'Lindsey Stroud',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    },
    tag: 'Event',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Answer the support tickets',
    dueDate: '2020-11-20',
    assignee: {
      user_id: 4,
      fullName: 'Curtis Schmidt',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
    },
    tag: 'Reminder',
    status: 'Active'
  },
  {
    id: 5,
    title: 'Close completed tickets. ',
    dueDate: '2020-11-20',
    assignee: {
      user_id: 5,
      fullName: 'Jane Doe',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    },
    tag: 'Reminder',
    status: 'Ended'
  },
  {
    id: 6,
    title: 'Send Payment Invoice. ',
    dueDate: '2020-11-20',
    assignee: {
      user_id: 6,
      fullName: 'Jones Dermont',
      avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
    },
    tag: 'Reminder',
    status: 'Completed'
  },
  {
    id: 7,
    title: 'Send Payment Invoice. ',
    dueDate: '2020-11-20',
    assignee: {
      user_id: 7,
      fullName: 'Martin Merces',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
    },
    tag: 'Reminder',
    status: 'Completed'
  }
]
export const getDays = [
  { id: 1, date: 23, day: 'Sun', class: 'active' },
  { id: 2, date: 24, day: 'Mon', class: '' },
  { id: 3, date: 25, day: 'Tue', class: '' },
  { id: 4, date: 26, day: 'Wed', class: '' },
  { id: 5, date: 27, day: 'Thu', class: '' },
  { id: 6, date: 28, day: 'Fri', class: '' },
  { id: 7, date: 29, day: 'Sat', class: '' }
]

export const getTags = [
  'reminder', 'call', 'event'
]

export const getEmails = [
  {
    email: 'martin.merces@gmail.com',
    status: 'Draft'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Scheduled'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Sent'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Draft'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Archived'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Draft'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Scheduled'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Sent'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Archived'
  },
  {
    email: 'martin.merces@gmail.com',
    status: 'Draft'
  }

]

export const getDeals = [
  {
    name: 200,
    status: 'Low'
  },
  {
    name: 150,
    status: 'High'
  },
  {
    name: 100,
    status: 'Urgent'
  }
]
