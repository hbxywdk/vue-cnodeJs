<template>
	<div class="one_list" v-for="item in pro">
		<img :src="item.author.avatar_url" alt="" class="fl">
		<span class="red_rep fl">{{item.reply_count}}/{{item.visit_count}}</span>
		<div class="type_ high_light fl" v-if="item.top">置顶</div>
		<div class="type_ high_light fl" v-else v-if="item.good">精华</div>
		<div class="type_ nomo_light fl" v-if="!item.top&&!item.good&&item.tab">{{item.tab | trans_type}}</div>

		<div class="time_">{{when_(item.create_at)}}</div>
		<div class="title_" v-link="{name:'details',params:{ixd:item.id}}"><a href="">{{item.title}}</a></div>
	</div>
	<div class="next">
		<div class="shang sx" v-if="shang_show" v-link="{name:'lists',params:{type_:list_type,page_:page_nub-1}}">上一页</div>
		<div class="xia sx" v-link="{name:'lists',params:{type_:list_type,page_:(parseInt(page_nub)+1)}}">下一页</div>
	</div>
</template>
<script>
import store from '../vuex/store'
import { when } from '../js/when.js'

export default{
	props: ['pro'],
	methods:{
		when_:when
	},
	computed:{
		shang_show(){
			if (this.page_nub<=1) {
				return false;
			}else{
				return true;
			}
		}
	},
	vuex:{
		getters:{
			list_type: state => state.list_type,
			page_nub: state => state.page_nub,
		}
	}

}

</script>
<style>
	.next{
		width: 100%;
		height: 50px;
		overflow: hidden;
	}
	.next .sx{
		width: 70px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		margin: 10px 5px 5px;
		background: #ddd;
		cursor: pointer;
		border-radius:3px;
	}
	.next .shang{
		float: left;
	}
	.next .xia{
		float: right;
	}
	.one_list{
		background: #fff;
		height: 50px;
	    padding: 10px 0 10px 10px;
	    font-size: 14px;
	    box-sizing: border-box;
	}
	.one_list:hover{
		background: #cdcdcd;
	}
	.one_list:after{
		content: '';
		clear: both;
	}
	.one_list img{
		width: 30px;
		height: 30px;
		display: inline-block;
		vertical-align: top;
	}
	.one_list .red_rep{
		display: inline-block;
		height: 30px;
		line-height: 30px;
		width: 70px;
		font-size: 12px;
		text-align: center;

	}
	.one_list .type_{
		width: 32px;
		height: 18px;
		display: inline-block;
		font-size: 12px;
		text-align: center;
		border-radius: 2px;
		padding-top: 1px;
		margin-top: 6px;
	}
	.one_list .high_light{
		background: #80bd01;
		color: #fff;

	}
	.nomo_light{
		background: #e5e5e5;
		color: #999;
	}
	.one_list .nomonal{
		background: #999;
		color: #444;
	}
	.one_list .time_{
		float: right;
		width: 67px;
		text-align: right;
		margin-right: 5px;
		line-height: 30px;
		color: #444;

	}
	.one_list .title_{
		margin-right: 72px;
		margin-left: 135px;
		line-height: 30px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.one_list .title_ a{
		text-decoration:none;
		color: #444;
	}
	.comtit_{
	    height: 39px;
	    background: #f6f6f6;
	    padding: 0 10px;
	    font-size: 14px;
	}
	.lists .comtit_ a{
		text-decoration: none;
		color: #80bd01;
		display: inline-block;
		width: 42px;
		height: 23px;
		text-align: center;
		padding: 3px;
		font-size: 16px;
		margin: 5px 10px 0 0;
		border-radius: 3px;
		line-height: 23px;
		line-height: 16px;
	}
	.lists .comtit_ a.avtive{
		background: #80bd01;
		color: #fff;
	}
</style>
