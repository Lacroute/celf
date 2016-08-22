import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Videos from './components/Videos'

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
    name: 'intro',
    component: Videos
  }
})

router.start(App, '#app')
