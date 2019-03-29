// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

//-------------------------------------phoenix-start---------------------------------------------------------
import 'lib-flexible/flexible.js'
//axios请求数据
import axios from 'axios';
import qs from 'qs';
Vue.prototype.axios = axios ;   //全局注册，使用方法为:this.axios
Vue.prototype.qs = qs ;          //全局注册，使用方法为:this.qs
//vux
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

//
import { Datetime } from 'vux'
Vue.component('datetime', Datetime)

//md5
// const md5=require('../static/js/md5.min');
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

//-----------------------------------phoenix-end---------------------------------------------------------------

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});





// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
