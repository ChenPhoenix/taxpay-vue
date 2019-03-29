import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import TaxPay from '@/components/TaxPay'
import Taxform from '@/components/Taxform'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
    // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
      {
          path: '/taxpay',
          component: TaxPay,
        alias:'/'

      },
      {
          path: '/taxform',
          component: Taxform
      },
      {
          path: '/parent',
          component: Parent
      },
      // {
      //     path: '/list',
      //     component: List
      // }
  ]
})
