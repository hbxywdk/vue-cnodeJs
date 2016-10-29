import Vue from 'vue';
import Vuex from 'Vuex';
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Login from './components/Login.vue'
import My from './components/My.vue'
import Message from './components/Message.vue'
import List from './components/List.vue'
import Lists from './components/Lists.vue'
import Details from './components/Details.vue'
import Post from './components/Post.vue'

Vue.use(VueRouter);
Vue.filter('trans_type',(type)=>{
	let v;
	switch(type){
		case 'ask':
			v='问答';
			break;
		case 'share':
			v='分享';
			break;
		case 'job':
			v='招聘';
			break;
	}
	return v;
})

const router = new VueRouter();

router.map({
	'/': { component: List },
	'/lists/:type_/:page_': { component: List ,name:'lists'},
    '/login': { component: Login ,name:'login'},
    '/my': { component: My ,name:'my'},
    '/message': { component: Message ,name:'message'},
    '/details/:ixd': { component: Details ,name:'details'},
    '/post': { component: Post ,name:'post'},
});

router.start(Vue.extend(App), '#box');

