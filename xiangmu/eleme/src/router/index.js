import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MyCity from '../components/MyCity'
import MyEnter from '../components/MyEnter'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {path: '/', redirect: '/mycity'},
    {path: '/mycity', component: MyCity},
    {path: '/myenter', component: MyEnter}
  ]
})
