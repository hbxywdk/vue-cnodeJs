<template>
	<div class="lists">
		<h3>发帖</h3>
		<select name="" id="se" class="form-control" v-model="type_t">
			<option value="ask">问答</option>
			<option value="share">分享</option>
			<option value="job">招聘</option>
		</select>
	    <div class="form-group">
	    	<label for="textInput" class="title_x">标题</label>
	    	<input type="text" class="form-control" id="textInput" placeholder="标题" v-model="title_t">
	    </div>
		<textarea name="" id="ta" v-model="textarea_t"></textarea>
		<button type="button" class="btn btn-success fr" @click="sure">发帖</button>

	</div>
	
</template>
<script>
import { post_tie } from '../vuex/actions.js'
export default{
	data(){
		return{
			title_t:'',
			textarea_t:'',
			type_t:'ask'
		}
	},
	vuex: {
	  getters: {
	    accesstoken: state=>state.accesstoken,
	  },
      actions: {
      	post_tie
      }
	},
	methods:{
		sure(){
			var This=this;
			if (this.title_t=='' || this.textarea_t=='') {
				alert('请填写完整！');
				return;
			}
			this.post_tie(this.accesstoken,this.title_t,this.textarea_t,this.type_t)
			.then(function(){
				alert('发帖成功');
				This.$route.router.go({path:'/'});
			})
			.catch(function(err){
				alert('出错');
			})
		}
	}

}

</script>
<style scoped>
	.form-control{
		margin: 10px 0;
		width: 100%!important;
	}
	#ta{
		width: 100%;
		height: 350px;
		resize: none;
		margin-bottom: 10px;
		padding: 1%;
		font-size: 16px;
	}
	.btn-success{
		background:#80bd01;
		width: 100px!important;
		
	}
	.title_x{
		margin-left: 3px;
	}
	#se{
		font-size: 15px!important;
	}
</style>
