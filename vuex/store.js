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

  notes: [1,2],
  test: 1,
  activeNote: {}
}

const mutations = {
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },

  CHEACK_TOKEN (state,id) {
    alert(id+'asd')
  },
  //检测token成功设置
  TOKEN_SUC (state,user,token) {
    state.user=user;
    state.accesstoken=token;
    state.token_err=false;
    state.login=true;
    //alert(state.accesstoken)
  },
  //检测token失败设置
  TOKEN_ERR (state) {
    state.token_err=true;
  },
  //登录成功后插入用户 积分 回复 回帖 等信息
  SET_USER_REP (state,rep) {
    state.user_rep=rep;
    //console.log(state.user_rep)
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
}

export default new Vuex.Store({
  state,
  mutations
})
