<template>
	<header class="head">
		<div class="header_box">
		<a v-link="{ path: '/'}">
			<img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" id="logo">
		</a>
			<nav>
				<ul v-if="login">
					<li><a v-link="{ path: '/'}">首页</a></li>
					<li class="noread_msg"><a v-link="{ path: '/message'}">消息<div class="noread_num" v-if="noread_num>0"></div></a></li>
					<li><a v-link="{ path: '/my'}">{{user.loginname}}</a></li>
					<li><a href="javascript:;" @click="sign_out">退出</a></li>
				</ul>
				<ul v-else>
					<li class="wap_"><a v-link="{ path: '/'}">首页</a></li>
					<li class="wap_"><a v-link="{ path: '/login'}">登录</a></li>
				</ul>
			</nav>
			</div>
	</header>
</template>
<script>
import { cheackToken , signOut} from '../vuex/actions.js'
export default{
	ready(){
		if (window.localStorage.id!=='') {
			this.cheackToken(window.localStorage.id)
		}
	},
	methods:{
		sign_out(){
			this.signOut();
			this.$route.router.go({path:'/'});
		}
	},
	vuex:{
		getters:{
			login:state => state.login,
			user:state => state.user,
			noread_num:state => state.noread_num
		},
		actions:{
			cheackToken,
			signOut
		}
	}
}

</script>
<style>
	nav li{
		margin-top: 5px;
	}
	.noread_msg{
		position: relative;
	}
	.noread_msg .noread_num{
		width: 5px;
		background: red;
		height: 5px;
		border-radius: 50%;
		position: absolute;
		top: 5px;
		right: 5px;
	}
</style>
