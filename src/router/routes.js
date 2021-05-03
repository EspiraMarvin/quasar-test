
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Dashboard.vue'),
        name: 'Dashboard'
      },
      {
        path: '/tasks',
        component: () => import('pages/Tasks.vue'),
        name: 'Tasks',
        children: [
          {
            path: '/tasks/:id', component: () => import('pages/Tasks.vue')
          }
        ]
      },
      {
        path: '/email',
        component: () => import('pages/Email.vue'),
        name: 'Emails',
        children: [
          {
            path: '/email/:id', component: () => import('pages/Email.vue')
          }
        ]
      },
      {
        path: '/contacts', component: () => import('pages/Contacts.vue'), name: 'Contacts'
      },
      {
        path: '/chat', component: () => import('pages/Chat.vue'), name: 'Chat'
      },
      {
        path: '/deals',
        component: () => import('pages/Deals.vue'),
        name: 'Deals',
        children: [
          {
            path: '/deals/:id', component: () => import('pages/Deals.vue')
          }
        ]
      },
      {
        path: '/settings', component: () => import('pages/Settings.vue'), name: 'Settings'
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
