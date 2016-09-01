import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Videos from './components/Videos'
import Zut from './components/Zut'
import Intro from './components/Intro'
import Contact from './components/Contact'

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
  },
  '/intro': {
    name: 'intro',
    component: Intro
  },
  '/contact': {
    name: 'contact',
    component: Contact
  }
})

router.start(App, '#app')
