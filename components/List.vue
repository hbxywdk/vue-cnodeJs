<template>
	<div class="lists">
		<div class="comdiv">
			<div class="comtit_">
				<a v-link="{name:'lists',params:{type_:'all',page_:1}}" href="javascript:;" thistype="all" v-bind:class="{'avtive':all}">全部</a>
				<a v-link="{name:'lists',params:{type_:'good',page_:1}}" href="javascript:;" thistype="good" v-bind:class="{'avtive':good}">精华</a>
				<a v-link="{name:'lists',params:{type_:'share',page_:1}}" href="javascript:;" thistype="share" v-bind:class="{'avtive':share}">分享</a>
				<a v-link="{name:'lists',params:{type_:'ask',page_:1}}" href="javascript:;" thistype="ask" v-bind:class="{'avtive':ask}">问答</a>
				<a v-link="{name:'lists',params:{type_:'job',page_:1}}" href="javascript:;" thistype="job" v-bind:class="{'avtive':job}">招聘</a>
			</div>
		</div>
		<div class="bg-danger" v-if="tips.show">{{tips.cont}}</div>
		<lists :pro="list" v-else></lists>	

	</div>
	
</template>
<script>
import store from '../vuex/store'
import { get_list } from '../vuex/actions.js'
import Lists from './Lists.vue'

export default{
	route:{
      data( { to: { params: { type_ = 'all', page_ = 1 } } } ) {
        const topictype_ = type_;
        const currentpage_ = page_;
        //alert(topicTab+"+"+page_)
        // 获取文章列表
        this.get_list(topictype_,currentpage_);

      },
	},
	vuex: {
	  getters: {
	    list_type: state => state.list_type,
	    list: state => state.list,
	    tips: state=> state.tips
	  },
      actions: {
        get_list
      }
	},
	components:{
		Lists		
	},
	ready(){
		//alert(this.list_type)
	},
	computed:{
		all(){
			if (this.list_type=='all') {
				return true;
			}else{
				return false;
			}
		},
		good(){
			if (this.list_type=='good') {
				return true;
			}else{
				return false;
			}
		},
		share(){
			if (this.list_type=='share') {
				return true;
			}else{
				return false;
			}
		},
		ask(){
			if (this.list_type=='ask') {
				return true;
			}else{
				return false;
			}
		},
		job(){
			if (this.list_type=='job') {
				return true;
			}else{
				return false;
			}
		}
	}

}

</script>
<style>
.bg-danger{
	width: 96%;
}

</style>
