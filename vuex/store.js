import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  login:false,//是否登录
  accesstoken:'',//用户accesstoken 
  user:'',//用户信息
  user_rep:'',//用户 积分 回复 回帖 等信息
  token_err:false,//用户名错误
  article:'',//存放文章详情页内容
  noread_num:0,//未读消息数量
  msg:'',//消息内容
  list:'',//首页文章列表
  page_nub:1,//文章页码
  list_type:'all',//文章类型
  article:'',//详情页内容
  tips:{
    show:false,
    cont:'加载中...'
  }
}

const mutations = {
  //检测token成功
  TOKEN_SUC (state,user,token) {
    state.user=user;
    state.accesstoken=token;
    state.token_err=false;
    state.login=true;
  },
  //检测token失败设置
  TOKEN_ERR (state) {
    state.token_err=true;
  },
  //登录成功后插入用户 积分 回复 回帖 等信息
  SET_USER_REP (state,rep) {
    state.user_rep=rep;
  },
  //退出登录
  SIGN_OUT(state){
    state.login=false;
    state.accesstoken='';
    state.user='';
    state.user_rep='';
    state.login=false;
    window.localStorage.id='';
  },
  //设置未读消息数量
  SET_USER_NOREAD_NUM(state,num){
    state.noread_num=num;
  },
  //设置消息内容
  SET_USER_MESSAGES(state,msg){
    state.msg=msg;
  },
  //文章类型改变
  TYPE_CHANGE(state,type){
    if(state.list_type!==type){
        state.list_type=type;
        state.page_nub=1;
    }
  },
  //设置获取到的文章列表
  GET_LIST_SUC(state,data,ty,pa){
    state.list=data;
    state.tips.show=false;
    state.list_type=ty;
    state.page_nub=pa;
  },
  //显示加载中提示
  LOAD(state){
    state.tips.show=true;
  },
  //添加文章详情
  LOAD_INNER(state,inner){
    state.article=inner;
  },
}

export default new Vuex.Store({
  state,
  mutations
})
