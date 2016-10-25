export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

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

export const ddd=({dispatch})=>{

}
