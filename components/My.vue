<template>
	<div class="lists" style="background: #e1e1e1">
		<div class="selfinfo">
			<a href="javascript:;" v-link="{ path: '/my'}">
				<img :src=user.avatar_url alt="">
			</a>
			<span>{{user.loginname}}</span>
			<p>积分：{{user_rep.score}}</p>
			<p class="e5">github帐号：{{user_rep.githubUsername}}</p>
			<p>注册于{{ when_(user_rep.create_at) }}</p>
		</div>
		<div class="_title_">最近创建的话题</div>
		<ul class="yhf_and_ohf">
			<li v-for="item in user_rep.recent_topics">
				<span class="fl"><img :src="item.author.avatar_url" alt="{{item.author.loginname}}" title="{{item.author.loginname}}"></span>
				<span class="fr e5">{{ when_(item.last_reply_at) }}</span>
				<span :thisid="item.id" class="text_content" v-link="{name:'details',params:{ixd:item.id}}">{{item.title}}</span>
			</li>
		</ul>
		<div class="_title_">最近参与的话题</div>
		<ul class="yhf_and_ohf">
			<li v-for="item in user_rep.recent_replies">
				<span class="fl"><img :src="item.author.avatar_url" alt="{{item.author.loginname}}" title="{{item.author.loginname}}"></span>
				<span class="fr e5">{{ when_( item.last_reply_at) }}</span>
				<span :thisid="item.id" class="text_content" v-link="{name:'details',params:{ixd:item.id}}">{{item.title}}</span>
			</li>
		</ul>
		<div class="fatie" v-link="{path:'/post'}">发帖</div>
	</div>

</template>
<script>
import { when } from '../js/when.js'
export default{
	vuex: {
	  getters: {
	    login: state => state.login,
	    user: state => state.user,
	    user_rep: state=> state.user_rep
	  }
	},
	methods:{
		when_:when
	}
}
</script>
<style>
	._title_{
		background: #fff;
		margin-top: 15px;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
	}
	.selfinfo{
		background: #fff;
	}
	.text_content{
		line-height: 30px;
		height: 30px;
		display: block;
		margin-left: 35px;
		margin-right: 80px;
	}
	.yhf_and_ohf>li{
		height: 50px;
		cursor: pointer;
		padding: 10px;
		background: #fff;
	}
	.yhf_and_ohf>li:hover{
		background: #e5e5e5;
	}
	.yhf_and_ohf>li img{
		width: 30px;
		height: 30px;
	}
	.fatie{
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
