/**
 * get请求 
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const get_=(url,options)=>{
	var url_;
	if (!options) {
		url_=url;
	}else{
		url_=`url?${options}`;
	}
	return fetch(url_)
		    .then(function(response){
			      if (response.status >= 200 && response.status < 300) {
			      		return response.json();
			      }
		    });
}
//获取具体文章内容
get_('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
.then(function(data){console.log(data)});

/**
 * [post_ post请求]
 * @param  {[String]} url     [地址]
 * @param  {[String]} options [参数]
 * @return {[Promise]}         [Promise]
 */
const post_=(url,options)=>{
	return fetch(url, {  
		method: 'post',  
		headers: {  
		  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
		},  
		body: options  
		})
		.then(function(response){
			return response.json()
		}) 
}
post_('https://cnodejs.org/api/v1/accesstoken','accesstoken=413fe275-4016-41c8-93cf-f7a196c83841')
.then(function(data){
	console.log(data);  
})
//根据token拿到的用户id 获取用户更多信息
const set_user_rep=(dispatch,id)=>{
	let url_=`https://cnodejs.org/api/v1/user/${id}`;
	get_(url_)
	.then(function(data){
		console.log('more',data.data)
		dispatch('SET_USER_REP',data.data);
	});

}
//根据token拿到的用户id 获取用户未读消息数量、已读和未读消息
const get_user_noread=(dispatch,token)=>{
	//消息数量
	let url_=`https://cnodejs.org/api/v1/message/count?accesstoken=${token}`;
	get_(url_)
	.then(function(data){
		console.log('num',data.data)
		dispatch('SET_USER_NOREAD_NUM',data.data);
	});

	//消息内容
	let url_2=`https://cnodejs.org/api/v1/messages?accesstoken=${token}`;
	get_(url_2)
	.then(function(re){
		if(re.success){
			dispatch('SET_USER_MESSAGES',re.data);
		}
		
	});
}
//Login.vue post请求检测 token 是否正确
export const cheackToken = ({ dispatch },id)=>{
	var param=`accesstoken=${id}`;
	//返回promise
	return post_('https://cnodejs.org/api/v1/accesstoken',param)
	.then(function(data){
		if (data.success) {
			console.log(data);
			dispatch('TOKEN_SUC',data,id);
			set_user_rep(dispatch,data.loginname);
			get_user_noread(dispatch,id)
			window.localStorage.id=id;
			//promise返回true 之后会执行跳转主页
			return true;
		}else{
			console.log(data.error_msg);
			dispatch('TOKEN_ERR');
			return false;
		}

	})
}

//退出登录
export const signOut=({dispatch})=>{
	dispatch('SIGN_OUT');
}
//消息全部标记为已读
export const all_read=({dispatch},token)=>{
	console.log(token)
	let url_=`https://cnodejs.org/api/v1/message/mark_all?accesstoken=${token}`
	return post_(url_)
			.then(function(data){
				if (data.success) {
					alert('成功');
				}
			})
			.catch(function(){
				alert('失败');
			});
}

//获取帖子列表
export const get_list=({dispatch},type,page)=>{
	//alert(type+"+"+page)
	dispatch('TYPE_CHANGE',type);
	dispatch('LOAD');
	get_('https://cnodejs.org/api/v1/topics?limit=20&tab='+type+'&page='+page)
	.then(function(data){
		//console.log(1,data.data)
		if (data.success) {
			dispatch('GET_LIST_SUC',data.data,type,page);
		}
	});

}
//加载帖子的内容
export const load_inner=({dispatch},ixd)=>{
	if (ixd) {
		get_('https://cnodejs.org/api/v1/topic/'+ixd)
		.then(function(data){
			//console.log(1,data.data)
			if (data.success) {
				//console.log("wdk",data.data)
				dispatch('LOAD_INNER',data.data)
			}
		});
	}
}
//点赞
export const zan=({dispatch},idyo,myid,x)=>{
	//alert(x);
	post_(`https://cnodejs.org/api/v1/reply/${idyo}/ups`,`accesstoken=${myid}`)
		.then(function(data){
			if (data.success) {
				alert('成功');
				get_('https://cnodejs.org/api/v1/topic/'+x)
				.then(function(data){
					//console.log(1,data.data)
					if (data.success) {
						//console.log("wdk",data.data)
						dispatch('LOAD_INNER',data.data)
					}
				});
			}
		})
		.catch(function(){
			alert('失败');
		});
}
//回复帖子 与 楼层
export const replay_topic=({dispatch},topic_id,token,text,someone)=>{
	if (someone!=='') {
		post_(`https://cnodejs.org/api/v1/topic/${topic_id}/replies`,`accesstoken=${token}&content=${text}&reply_id=${someone}`)
			.then(function(data){
				if (data.success) {
					alert('成功');
					get_(`https://cnodejs.org/api/v1/topic/${topic_id}`)
					.then(function(data){
						//console.log(1,data.data)
						if (data.success) {
							//console.log("wdk",data.data)
							dispatch('LOAD_INNER',data.data);
						}
					});
				}
			})
			.catch(function(){
				alert('失败');
			});	
	}else{
		post_(`https://cnodejs.org/api/v1/topic/${topic_id}/replies`,`accesstoken=${token}&content=${text}`)
			.then(function(data){
				if (data.success) {
					alert('成功');
					get_(`https://cnodejs.org/api/v1/topic/${topic_id}`)
					.then(function(data){
						//console.log(1,data.data)
						if (data.success) {
							//console.log("wdk",data.data)
							dispatch('LOAD_INNER',data.data);
						}
					});
				}
			})
			.catch(function(){
				alert('失败');
			});	
	}
	
}
export const post_tie=({dispatch},token,tit,tet,typ)=>{
	if (tit&&tet&&typ) {
		return post_('https://cnodejs.org/api/v1/topics',`accesstoken=${token}&title=${tit}&tab=${typ}&content=${tet}`)
				.then(function(data){
					if (data.success) {
						console.log(data.success);
					}else{
						throw new Error('出错');
					}
				})

	}
}

