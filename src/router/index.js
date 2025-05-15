import { createRouter, createWebHashHistory } from 'vue-router'

// Importar las vistas para las páginas
import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import EducationView from '@/views/EducationView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import SkillsView from '@/views/SkillsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CoursesView,
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(), // <- aquí el cambio importante
  routes,
})

export default router
