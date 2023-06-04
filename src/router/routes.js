export default [
  {
    name: "Master",
    path: "/",
    component: import('./../pages/layout/master'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: import('./../pages/dashboard'),
      },
      {
        name: 'user',
        path: '/user',
        component: import('./../pages/user'),
      },
      {
        name: 'product',
        path: '/product',
        component: import('./../pages/product'),
      },
      {
        name: 'registration',
        path: '/registration',
        component: import('./../pages/registration'),
      },
      {
        name: 'activation',
        path: '/activation',
        component: import('./../pages/activation'),
      }
    ]
    },

]