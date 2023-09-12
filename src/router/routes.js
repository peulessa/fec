
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import ('pages/InfoPage.vue') },
      { path: 'plano', component: () => import ('pages/PlanoPage.vue') },
      { path: 'servicos', component: () => import ('pages/ServicosPage.vue') },
      { path: 'informacoes', component: () => import ('pages/FormPessoalPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
