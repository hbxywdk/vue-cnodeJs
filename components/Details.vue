<template>
	<div class="lists">
		<div class="inner_top">
			<div class="pic_title">
				<img :src="article.author.avatar_url" :alt="article.author.loginname"><h2>{{article.title}}</h2>
			</div>
			<p class="arc_info">
				作者：<span>{{article.author.loginname}}</span>
				发布于：<span>{{ when_(article.create_at) }}</span>
				回复：<span>{{article.reply_count}}</span>
				浏览：<span>{{article.visit_count}}</span>
			</p>
		</div>
		<div>
			{{{article.content}}}
		</div>
		<div class="inner_reply">
			<h4>回复</h4>
			<ul>
				<li v-for="item in article.replies">
					<div class="reply_title">
						<img :src="item.author.avatar_url" :alt="item.author.loginname"><span class="au_name"> {{item.author.loginname}} </span>{{$index+1}}楼 {{ when_(item.create_at) }}
						<span class="fr">
						<span :idyo="item.id" @click="zan_t" class="no_zan"></span>{{item.ups.length}}
						<span :rep_id="item.id" :rep_name="item.author.loginname" @click="at_someone">回复</span>
						
						</span>
						<div class="mt10">

							{{{item.content}}}
						</div>
					</div>
				</li>
			</ul>
		</div>
		<h4>添加回复</h4>
		<textarea class="text_area" maxlength="300" v-model='text'>

		</textarea>
		<div class="tijiao fr" @click="replay">提交</div>
	</div>
</template>
<script>
import { load_inner , zan , replay_topic} from '../vuex/actions.js'
import { when } from '../js/when.js'
export default{
	data(){
		return{
			text:'',
			topic_id:'',
			replay_name:''
		}
	},
	vuex: {
	  getters: {
	    article: state => state.article,
	    user: state => state.user,
	    accesstoken: state => state.accesstoken
	  },
      actions: {
        load_inner,
        zan,
        replay_topic,
      }
	},
	methods:{
		when_:when,
		zan_t(e){
			let idyo=e.target.getAttribute('idyo');
			this.zan(idyo,this.accesstoken,this.$route.params.ixd);
		},
		//回复文章
		replay(){
			if(this.text===''){
				alert('回复内容不能为空！');
				return;
			}else{
				this.replay_topic(this.topic_id,this.accesstoken,this.text,this.replay_name);
				this.text='';
			}
		},
		//回复某人
		at_someone(e){
			let replayxid=e.target.getAttribute('rep_id');
			let replayxname=e.target.getAttribute('rep_name');
			var doc=document.body || document.documentElement;
			doc.scrollTop=doc.offsetHeight;
			this.text=`@${replayxname}`;
			this.replay_name=replayxid;
		},
	},
	route:{
      data(transition) {
      	let ixd_=this.$route.params.ixd;
      	this.topic_id=ixd_;
        this.load_inner(ixd_);
      },
	}
}

</script>
<style>
	.lists{
		padding: 2%;
	}
	.lists img{
		max-width:100%;
	}
	.inner_top .pic_title{
		line-height: 40px;
		overflow: hidden;
	}
	.inner_top .pic_title>img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: inline-block;
		vertical-align: middle;
	}
	.inner_top .pic_title>h2{
		display: inline;
		line-height: 40px;
		vertical-align: middle;
		font-size: 25px;
		word-break: break-all;
	}
	.inner_top .arc_info{
		padding-left: 40px;
	}
	@media screen and (max-width: 640px){
		.inner_top .arc_info{
			padding-left: 0px;
			text-align: center;
		}
	}
	.inner_reply ul li{
		margin-bottom: 20px;
	}
	.inner_reply ul li .reply_title>img{
		width: 30px;
		height: 30px;
	}
	.au_name{
		font-weight: 700;
	}
	.mt10{
		margin-top: 10px;
	}
	.no_zan{
		
		width: 17px;
		height: 15px;
		display: inline-block;
		background: url(../img/2.png) no-repeat center;
		background-size: 17px 15px;
		cursor: pointer;
	}
	.text_area{
		width: 100%;
		height: 200px;
		resize: none;
		line-height: 22px;
		padding: 1%;
	}
	.tijiao{
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
