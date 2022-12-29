import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/pokemon/:id', name: 'pokemon.show', component: ()=> import('../views/ShownPokemon.vue')}
]


const router = createRouter({
  history : createWebHistory(),
  routes,
  linkActiveClass : 'r-active-link'
})

export default router