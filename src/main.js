import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Videos from './components/Videos'
import Zut from './components/Zut'

/* eslint-disable no-new */
Vue.use(VueRouter)

var router = new VueRouter({
  history: false,
  root: '/'
})

router.map({
  '/accueil': {
    name: 'home',
    component: Home
  },
  '/videos': {
    name: 'videos',
    component: Videos
  },
  '/zut': {
    name: 'zut',
    component: Zut
  }
})

router.start(App, '#app')
