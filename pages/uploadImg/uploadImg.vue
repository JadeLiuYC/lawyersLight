<template>
	<view class="page-body">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>
		</view>  
		<!-- #endif -->
		<view class="bgTop">
			<text class="uni-icon uni-icon-arrowleft" @tap="goBack"></text>
		</view>
		<view class="formbox">
			<view class="formbox-list" @tap="upload('0')">
				<view class="infobox">
					<view class="tit">律师执业证</view>
					<view class="info">点击上传律师执业证展开首页照片</view>
				</view>
				<image class="img" src="../../static/upload-1.png"></image>
			</view>
			<view class="formbox-list" @tap="upload('1')">
				<view class="infobox">
					<view class="tit">个人形象照	</view>
					<view class="info">点击上传个人形象照</view>
				</view>
				<image class="img" src="../../static/upload-2.png"></image>
			</view>
			<view class="formbox-list" @tap="upload('2')">
				<view class="infobox">
					<view class="tit">微信二维码</view>
					<view class="info">将二维码保存至手机相册,上传从手机相册选择</view>
				</view>
				<image class="img" src="../../static/upload-3.png"></image>
			</view>
			<view class="prompt">
				<view class="tit">1.为了确保认证通过，请按要求填写资料；</view>
				<view class="tit">2.部分信息将在个人主页显示，如个人简历、擅长领域等，请认真填写；</view>
			</view>
			<view class="btnbox">
				<button type="default" class="uni-btn uni-btn-blocked" @tap="confirm">提交审核</button>
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
			upload(index){
				var index = index;
				uni.chooseImage({
					count: 1, //默认9
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});
					}
				});
			},
			confirm(){
				
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
		background: url(../../static/upload_2.jpg) round;
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
	.formbox-list{
		display: flex;
		align-items: center;
		padding: 20upx;
		background-color: #f1f0f1;
		border-radius: 10upx;
		margin-bottom: 25upx;
	}
	.formbox-list .infobox{
		flex: 1;
		color: #b3c2e9;
		padding-left: 10upx;
	}
	.formbox-list .infobox .tit{
		font-size: 34upx;
	}
	.formbox-list .infobox .info{
		font-size: 23upx;
	}
	.formbox-list .img{
		width: 234upx;
		height: 146upx;
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
