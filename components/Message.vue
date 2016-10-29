<template>
	<div class="lists" style="background: #e1e1e1">
		<div class="_title_">未读消息</div>
		<ul class="yhf_and_ohf">
			<li v-for="item in msg.hasnot_read_messages">
				<span class="fl wqe">
					<img :src="item.author.avatar_url" alt="{{item.author.loginname}}" title="{{item.author.loginname}}">
					&nbsp;
					<span class="bule_">{{item.author.loginname}}</span>&nbsp;回复了你的话题&nbsp;
				</span>
				<span :thisid="item.id" class="text_content bule_" v-link="{name:'details',params:{ixd:item.topic.id}}">{{item.topic.title}}</span>
			</li>
		</ul>
		<div class="_title_">已读消息</div>
		<ul class="yhf_and_ohf">
			<li v-for="item in msg.has_read_messages">
				<span class="fl wqe">
					<img :src="item.author.avatar_url" alt="{{item.author.loginname}}" title="{{item.author.loginname}}">
					&nbsp;
					<span class="bule_">{{item.author.loginname}}</span>&nbsp;回复了你的话题&nbsp;
				</span>
				<span :thisid="item.id" class="text_content bule_" v-link="{name:'details',params:{ixd:item.topic.id}}" >{{item.topic.title}}</span>
			</li>
		</ul>
		<div @click="all_read_x" class="all_read_c">全部标记为已读</div>	
	</div>
	
</template>
<script>
import { all_read } from '../vuex/actions.js'

export default{
	vuex: {
	  getters: {
	    accesstoken: state=>state.accesstoken,
	    msg: state=>state.msg
	  },
      actions: {
        all_read
      }
	},
	methods:{
		all_read_x(){
			this.all_read(this.accesstoken);
		}
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
	    overflow: hidden;
    	text-overflow: ellipsis;
		white-space: nowrap;
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
	.wqe{
		line-height: 30px;
	}
	.wqe img{
		vertical-align: middle;
	}
	.all_read_c{
	    width: 120px;
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
