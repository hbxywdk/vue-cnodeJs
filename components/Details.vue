<template>
	<div class="lists">
		{{{article.content}}}
	</div>
</template>
<script>
import { load_inner } from '../vuex/actions.js'

export default{
	vuex: {
	  getters: {
	    article: state => state.article
	  },
      actions: {
        load_inner
      }
	},
	methods:{

	},
	route:{
      data(transition) {
      	let ixd_=this.$route.params.ixd;
        //console.log(123,this.$route.params.ixd)
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

</style>
