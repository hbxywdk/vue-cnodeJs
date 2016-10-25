<template>
	<div class="lists">
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
			myToken:'413fe275-4016-41c8-93cf-f7a196c83841'
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
/* 修改bt样式 */
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
</style>
