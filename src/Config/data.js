export const getUsers = [
  {
    id: 1,
    name: 'Lindsey Stroud',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    email: 'lindsey.stroud@gmail.com',
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
  { id: 1, date: 23, day: 'Sun', year: 2018, class: 'active' },
  { id: 2, date: 24, day: 'Mon', year: 2018, class: '' },
  { id: 3, date: 25, day: 'Tue', year: 2018, class: '' },
  { id: 4, date: 26, day: 'Wed', year: 2018, class: '' },
  { id: 5, date: 27, day: 'Thu', year: 2018, class: '' },
  { id: 6, date: 28, day: 'Fri', year: 2018, class: '' },
  { id: 7, date: 29, day: 'Sat', year: 2018, class: '' }
]

export const getTags = [
  { id: 1, name: 'reminder' }, { id: 2, name: 'call' }, { id: 3, name: 'event' }
]
export const getStatus = [
  { id: 1, name: 'Completed' }, { id: 2, name: 'Ended' }, { id: 3, name: 'Active' }
]
export const getEmails = [
  {
    id: 1,
    email: 'martin.merces@gmail.com',
    status: 'Draft'
  },
  {
    id: 2,
    email: 'curtisschmidt@gmail.com',
    status: 'Scheduled'
  },
  {
    id: 3,
    email: 'lindsey.stroud@gmail.com',
    status: 'Sent'
  },
  {
    id: 4,
    email: 'john.smith@gmail.com',
    status: 'Draft'
  },
  {
    id: 5,
    email: 'jane.doe@gmail.com',
    status: 'Archived'
  },
  {
    id: 6,
    email: 'nicci.troiani@gmail.com',
    status: 'Draft'
  },
  {
    id: 7,
    email: 'franz.ferdinand@gmail.com',
    status: 'Scheduled'
  },
  {
    id: 8,
    email: 'judith.williams@gmail.com',
    status: 'Sent'
  },
  {
    id: 9,
    email: 'rebecca.mooore@gmail.com',
    status: 'Archived'
  },
  {
    id: 10,
    email: 'jones.dermont@gmail.com',
    status: 'Draft'
  }

]

export const getDeals = [
  {
    date: '1 Dec',
    value: 50,
    rating: 'Low',
    status: 'closed'
  },
  {
    date: '8 Dec',
    value: 200,
    rating: 'High',
    status: 'closed'
  },
  {
    date: '16 Dec',
    value: 120,
    rating: 'Urgent',
    status: 'closed'
  },
  {
    date: '22 Dec',
    value: 90,
    rating: 'High',
    status: 'closed'
  },
  {
    value: 170,
    rating: 'Urgent',
    status: 'closed'
  },
  {
    date: '28 Dec',
    value: 130,
    rating: 'Closed',
    status: 'closed'
  },
  {
    date: '31 Dec',
    value: 140,
    rating: 'Urgent',
    status: 'open'
  }
]
