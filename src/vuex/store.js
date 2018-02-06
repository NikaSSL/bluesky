import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要维护的状态，初始化state
const state = {
	news:true,
	orders:false,
	me:false,
	index:true,
	shareState:false,//分享界面是否显示
	newInfo:{},//选中新闻的相关数据
	comment:false,//评论板块是否显示
	writeComment:false,//评论输入面板是否显示
	searchResult:{},//搜索结果
	pushMsg:{},//推送消息
	orderList:{},//订阅内容
	thumbUpList:{},//已赞评论
	darkState:false//夜晚模式是否开启
}

//初始化 mutations
const mutations = {
	IN_NEWS(state){
		state.news = true;
		state.orders = false;
		state.me = false;
	},
	IN_ORDERS(state){
		state.news = false;
		state.orders = true;
		state.me = false;		
	},
	IN_ME(state){
		state.news = false;
		state.orders = false;
		state.me = true;			
	},
	Out_Index(state){
		state.index = false;
	},
	IN_Index(state){
		state.index = true;
	},
	IN_Share(state){
		state.shareState = true;
	},
	Out_Share(state){
		state.shareState = false;
	},
	Set_NewInfo(state,newInfo){
		state.newInfo = newInfo;
	},
	Toggle_comment(state){
		state.comment = !state.comment;
	},
	Toggle_write(state){
		state.writeComment = !state.writeComment;
	},
	Set_searchResult(state,result){
		state.searchResult = result;
	},
	Set_PushMsg(state,pushMsg){
		state.pushMsg = pushMsg;
	},
	Set_SubMsg(state,orderList){
		state.orderList = orderList;
	},
	Set_ThumbUpList(state,thumbUpList){
		state.thumbUpList = thumbUpList;
	},
	In_Dark(state){
		state.darkState = true;
	},
	Out_Dark(state){
		state.darkState = false;
	}
}

//初始化 actions
const actions ={
	inNews({commit}){
		commit('IN_NEWS');
	},
	inOrders({commit}){
		commit('IN_ORDERS');
	},
	inMe({commit}){
		commit('IN_ME');
	},
	outIndex({commit}){
		commit('Out_Index');
	},
	inIndex({commit}){
		commit('IN_Index');
	},
	inShare({commit}){
		commit('IN_Share');
	},
	outShare({commit}){
		commit('Out_Share');
	},
	setNewInfo({commit}){
		commit('Set_NewInfo');
	},
	toggleComment({commit}){
		commit('Toggle_comment');
	},
	toggleWrite({commit}){
		commit('Toggle_write');
	},
	inDark({commit}){
		commit('IN_Dark');
	},
	outDark({commit}){
		commit('Out_Dark');
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})