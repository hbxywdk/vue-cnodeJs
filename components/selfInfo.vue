<template>
	<aside>
	<template v-if="login">
		<div class="comdiv">
			<div class="comtit">个人信息</div>
			<div class="selfinfo">
				<a href="javascript:;" v-link="{ path: '/my'}">
					<img :src=user.avatar_url alt="">
				</a>
				<span>{{user.loginname}}</span>
				<p>积分：{{user_rep.score}}</p>
				<div class="fatie" v-link="{path:'/post'}">发帖</div>
			</div>
		</div>
	</template>
	<template v-else>
		<div class="comdiv">
			<div class="comtit">CNode：Node.js专业中文社区</div>
			<div class="login_">
				<div v-link="{ path: '/login'}">登录</div>
			</div>
		</div>
	</template>

	</aside>
</template>
<script>
export default{
	vuex: {
	  getters: {
	    login: state => state.login,
	    user: state => state.user,
	    user_rep: state=> state.user_rep
	  }
	},
}
</script>
<style>
	.login_{
		height: 150px;
		position: relative;
	}
	.login_>div{
		width: 80px;
		height: 40px;
		line-height: 40px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -20px;
		margin-left: -40px;
		background: #2eaae2;
		color: 	#fff;
		text-align: center;
		border-radius:3px;
		cursor: pointer;
	}
	.selfinfo{
		height: 180px;
		padding: 25px;
		box-sizing: border-box;
	}
	.selfinfo a img{
		width: 48px;
		height: 48px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.selfinfo>p{
		margin: 5px 0;
	}
	.selfinfo .fatie{
		width: 80px;
		height: 37px;
		background: #80bd01;
		line-height: 37px;
		text-align: center;
		color: #fff;
		margin: 15px 0;
		border-radius: 3px;
		cursor: pointer;
	}
</style>
