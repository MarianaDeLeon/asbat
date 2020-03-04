require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import Vuex from 'vuex';
import * as VeeValidate from 'vee-validate';
import storeData from './store.js';
import Main from './components/Main.vue';
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);
const router = new VueRouter({
routes,
mode: 'history'
});

const store = new Vuex.Store(storeData);
const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        Main
    }
});


