
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/Home',
    children: [
      { name: 'home', path: '/Home', component: () => import('pages/Index.vue') },
      { path: '/Students', component: () => import('pages/Studentlist.vue') },
      { path: '/Subjects', component: () => import('pages/Subjectlist.vue') },
      { path: '/Classrooms', component: () => import('pages/ClassroomList.vue') },
      { name: 'classroom', path: '/Classrooms/details/:id', component: () => import('pages/classroomdetails.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
