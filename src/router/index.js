import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import index from '../page/index.vue'
import ChangeCity from '../page/changeCity.vue'
import goodsList from '../page/goodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      children: [ {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },{
        path: '/index',
        name: 'index',
        component: index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }]
    }, {
      path: '/blank',
      name: 'blank',
      component: blankPage
    }
  ]
})
