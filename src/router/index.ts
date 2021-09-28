import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import NotebookList from '@/components/NotebookList.vue'
import NoteDetail from '@/components/NoteDetail.vue'
import TrashDetail from '@/components/TrashDetail.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/notebooks',
    component: NotebookList,
  },
  {
    path: '/note/:noteId',
    component: NoteDetail,
  },
  {
    path: '/trash/:noteId',
    component: TrashDetail,
  },
  {
    path: '*',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
})

export default router