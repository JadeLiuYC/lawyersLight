<template>
	<view class="page-body">
		<view class="inputbox">
			<view class="tit">写下您的意见或建议</view>
			<textarea name="message" class="textarea" @input="input"></textarea>
		</view>
		<view class="btnbox">
			<button type="default" class="btn">提交反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			input(event){
				console.log(event.value)
			}
		}
	}
</script>

<style>
	.page-body{
		padding: 40upx;
	}
	.inputbox .tit{
		font-size: 26upx;
		color: #949494;
	}
	.inputbox .textarea{
		margin-top: 20upx;
		width: 100%;
		height: 300upx;
		background-color: #eeeeee;
		box-sizing: border-box;
		padding: 20upx;
	}
	.btnbox{
		margin-top: 300upx;
	}
	.btnbox button.btn{
		border-radius: 50upx;
		color: #fff;
		font-size: 30upx;
		background: #f47505;
	}
	.btnbox button.btn:after{
		border: none;
	}
	.button-hover[type=default]{
		background: #f47505;
	}
</style>
