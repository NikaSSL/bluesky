
<!-- Me页面中相关配置-2 -->

<template>
	<div :class="['container','box',darkState?'night-word night-box':'day-box']">
		<div class="row">
			<router-link :class="[darkState?'night-word':'day-word']" to="/aboutBlueSky" @click.native="hideFooter">
				<div :class="['col-xs-4','col-xs-offset-2','modify-padding','row-height','line',darkState?'night-line':'day-line']">
					<span>关于</span>
				</div>
				<div :class="['col-xs-6','row-height','line',darkState?'night-line':'day-line']">
					<i :class="['arrow',darkState?'night-arrow':'night-arrow']"></i>
				</div>
			</router-link>
		</div>
		<div class="row">
			<router-link :class="[darkState?'night-word':'day-word']" to="/thumbUp" @click.native="hideFooter">			
				<div :class="['col-xs-4','col-xs-offset-2','modify-padding','row-height','line',darkState?'night-line':'day-line']">
					<span>赞过的</span>
				</div>
				<div :class="['col-xs-6','row-height','line',darkState?'night-line':'day-line']">
					<i :class="['arrow',darkState?'night-arrow':'night-arrow']"></i>
				</div>
			</router-link>
		</div>
		<div class="row">
			<div :class="['col-xs-4','col-xs-offset-2','modify-padding','row-height','line',darkState?'night-line':'day-line']">
				<span>当前版本</span>
				<div class="new-info"></div>
			</div>
			<div :class="['col-xs-6','line','row-height','word-style',darkState?'night-word night-line':'day-inner-word day-line']">
				1.0
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		name:'meConfig2',
		computed:{
			darkState:function(){
				return this.$store.state.darkState;
			}
		},
		methods:{
			hideFooter:function(){
				this.$store.dispatch('outIndex');
			}
		}
	}
</script>

<style scoped>
	.box{
		width: 100%;
		font-size: 0.28rem;
	}
	.night-box{
		border-bottom: 0.3rem solid #2A2A30;
	}
	.day-box{
		border-bottom: 0.3rem solid #F1F3F5;		
	}
	.night-word{
		color: #A2A4A6;
	}
	.day-word{
		color: #333333;
	}	
	.line{
		padding-left: 0;
		padding-right: 0.3rem;
	}
	.day-line{
		border-bottom: 1px solid #F1F3F5; 
	}
	.night-line{
		border-bottom: 1px solid #2A2A30;
	}
	.arrow{
		background-repeat: no-repeat;
		background-size: 100%;
		display: block;
		width: 0.32rem;
		height: 0.32rem;
		float: right;		
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		transform: rotate(180deg);
	}
	.day-arrow{
		background-image: url("../assets/48_dark_back.png");
	}
	.night-arrow{
		background-image: url("../assets/4_icon_back.png");
	}
	.row-height{
		height: 0.9rem;
		line-height: 0.9rem;
	}
	.modify-padding{
		padding-left: 0;
	}
	.word-style{
		text-align: right;
	}
	.day-inner-word{
		color: #A5A5A5;
	}
	.new-info{
		display: inline-block;
		position: relative;
		top: -0.12rem;
		width: 0.1rem;
		height: 0.1rem;
		background-color: #FF0202;
		border-radius: 50%;
	}
	.black{
		color: #333333;
	}
</style>