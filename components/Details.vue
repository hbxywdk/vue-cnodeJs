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
			<h3>回复</h3>
			<ul>
				<li v-for="item in article.replies">
					<div class="reply_title">
						<img :src="item.author.avatar_url" :alt="item.author.loginname"><span class="au_name"> {{item.author.loginname}} </span>{{$index+1}}楼 {{ when_(item.create_at) }}
						<span class="fr">
							
						<span :idyo="item.id" @click="zan_t" class="{ 'had_zan':return_f_t(user.id,item.ups),'no_zan':return_f_t(user.id,item.ups)}">1</span>
						{{item.ups.length}}
						</span>
						<div class="mt10">
							{{{item.content}}}
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { load_inner , zan} from '../vuex/actions.js'
import { when } from '../js/when.js'
export default{
	vuex: {
	  getters: {
	    article: state => state.article,
	    user: state => state.user,
	    accesstoken: state => state.accesstoken
	  },
      actions: {
        load_inner,
        zan
      }
	},
	methods:{
		when_:when,
		return_f_t(id,ups){
			alert()
			for(i in ups){
				if (ups[i]==id) {
					return true;
				}else{
					return false;
				}
			}
		},
		zan_t(e){
			let idyo=e.target.getAttribute('idyo');
			this.zan(idyo,this.accesstoken);
		}
	},
	route:{
      data(transition) {
      	let ixd_=this.$route.params.ixd;
        this.load_inner(ixd_);

      },
	},
//	components:{
//		Home,
//		Home2
//	}
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
	.had_zan{
		
		width: 13px;
		height: 15px;
		display: inline-block;
		background-size: 13px 15px;
		background: url(../img/1.png) no-repeat center;
	}
	.no_zan{
		
		width: 13px;
		height: 15px;
		display: inline-block;
		background-size: 13px 15px;
		background: url(../img/2.png) no-repeat center;
	}
</style>
