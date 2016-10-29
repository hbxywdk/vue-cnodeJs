<template>
	<div class="lists">
		<h3 class="cen">Access Token登录</h3>
		<p class="cen">（注册cnodejs后可在设置中找到）</p>
		<input type="text" maxlength="40" v-model="myToken" class="form-control">	
		<a href="javascript:;" class="btn btn-primary" @click.prevent.stop="subToken">登录</a>
		<p class="bg-danger" v-if="token_err">Token错误</p>
	</div>
</template>
<script>
import store from '../vuex/store'
import { cheackToken } from '../vuex/actions.js'
export default{
	data(){
		return {
			myToken:''
		}
	},
	vuex: {
	  getters: {
	    token_err: state => state.token_err
	  },
      actions: {
        cheackToken
      }
	},
	methods:{
		subToken(){

			this.cheackToken(this.myToken)
			.then((bl)=>{
				if (bl) {
					this.$route.router.go({path:'/'})
				}
			})

		}
	}

}
</script>
<style>
.bg-danger{
	padding: 9px;
	font-size: 18px;
	width: 50%;
	margin: 30px auto;
	font-size: 18px;
	display: block;
	text-align: center;
	border-radius: 3px;
	color: #666;
}
.form-control{
	width: 50%;
	margin: 30px  auto;
	font-size: 18px;
}
.btn{
	width: 50%;
	margin: 0 auto;
	font-size: 18px;
	border-radius: 3px;
	display: block;

}
.cen{
	text-align: center;
}
</style>
