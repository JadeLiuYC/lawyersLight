<template>
	<view class="page-body">
		<view class="status_bar">  
			<view class="top_view"></view>
		</view>  
		<view class="bgTop">
			<text class="uni-icon uni-icon-arrowleft" @tap="goBack"></text>
		</view>
		<view class="formbox">
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-11.png"></image>
				<input type="text" placeholder="请输入姓名">
			</view>
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-12.png"></image>
				<input type="idcard" placeholder="请输入律师执业证号">
			</view>
			<view>
				
			</view>
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-13.png"></image>
				<input type="number" placeholder="请输入手机号">
			</view>
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-14.png"></image>
				<input type="text" placeholder="请输入电子邮箱">
			</view>
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-15.png"></image>
				<input type="text" placeholder="请输入擅长领域">
			</view>
			<view class="formbox-item">
				<image mode="widthFix" src="../../static/upload-16.png"></image>
				<input type="text" placeholder="请输入个人简介">
			</view>
			<view class="prompt">
				<view class="tit">1.为了确保认证通过，请按要求填写资料；</view>
				<view class="tit">2.部分信息将在个人主页显示，如个人简历、擅长领域等，请认真填写；</view>
			</view>
			<view class="btnbox">
				<button type="default" class="uni-btn uni-btn-blocked" @tap="next">下一步</button>
			</view>
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
			goBack(){
				uni.navigateBack()
			},
			next(){
				uni.navigateTo({
					url:"../uploadImg/uploadImg"
				})
			}
		}
	}
</script>

<style>
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;
		background-color: #bfd5ec;  
	}  
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: #bfd5ec;  
		top: 0;  
		z-index: 999;  
	}
	.bgTop{
		width: 100%;
		height: 485upx;
		background: url(../../static/upload_1.jpg) round;
	}
	.bgTop .uni-icon{
		margin-top: 30upx;
		margin-left: 30upx;
		font-size: 60upx;
		color: #999;
	}
	.formbox{
		width: 670upx;
		margin: -200upx auto 0 auto;
		background-color: #fff;
		border-radius: 10upx;
		box-shadow: 0 0 10px #ccc;
		box-sizing: border-box;
		padding: 45upx 50upx;
	}
	.formbox-item{
		display: flex;
		align-items: center;
		padding: 20upx 40upx;
		background-color: #f1f0f1;
		border-radius: 50upx;
		margin-bottom: 25upx;
	}
	.formbox-item image{
		width: 40upx;
	}
	.formbox-item input{
		flex: 1;
		padding-left: 20upx;
	}
	.formbox .prompt .tit{
		color: #b4b4b4;
		font-size: 23upx;
	}
	.btnbox{
		margin-top: 40upx;
	}
	.btnbox .uni-btn{
		font-size: 34upx;
		color: #fff;
		border-radius: 50upx;
		background: linear-gradient(to right, #43baeb, #74dbf5);
	}
</style>
