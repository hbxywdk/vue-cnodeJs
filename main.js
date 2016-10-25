import Vue from 'vue';
import Vuex from 'Vuex';
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Login from './components/Login.vue'
import My from './components/My.vue'
import Message from './components/Message.vue'
import List from './components/List.vue'

Vue.use(VueRouter);
//1
const router = new VueRouter();
//2
router.map({
	'/': { component: List },
    '/login': { component: Login },
    '/my': { component: My },
    '/message': { component: Message },
});
//3
router.start(Vue.extend(App), '#box');

