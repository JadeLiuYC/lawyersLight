<template>
	<view class="center">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>
		</view>  
		<!-- #endif -->
		<view class="bgtop"></view>
		<view class="logo">
			<image class="logo-img" :src="login ? userInfo.avatar :avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">{{login ? userInfo.nickname : '游客'}}</text>
			</view>
			<view class="uni-section">
				<view class="uni-section-item fl" @tap="store">
					<image class="img" src="../../static/center-1.png"></image>
					<view class="tit">收藏</view>
				</view>
				<view class="uni-section-item fr" @tap="message">
					<image class="img" src="../../static/center-2.png"></image>
					<view class="tit">意见反馈</view>
				</view>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @tap="upload">
				<view class="imgbox">
					<image class="img" mode="widthFix" src="../../static/center-list-1.jpg"></image>
				</view>
				<view class="titbox">
					<view class="tit">上传律师资质</view>
					<view class="info">上传资质免费认证后接案源</view>
				</view>
				<view class="uni-icon uni-icon-arrowright"></view>
			</view>
			<view class="center-list-item border-bottom" @tap="goContract">
				<view class="imgbox">
					<image class="img" mode="widthFix" src="../../static/center-list-2.jpg"></image>
				</view>
				<view class="titbox">
					<view class="tit">合同范本</view>
					<view class="info">可下载各种合同版本</view>
				</view>
				<view class="uni-icon uni-icon-arrowright"></view>
			</view>
			<view class="center-list-item border-bottom" @tap="invite">
				<view class="imgbox">
					<image class="img" mode="widthFix" src="../../static/center-list-3.jpg"></image>
				</view>
				<view class="titbox">
					<view class="tit">邀请好友</view>
					<view class="info">分享海报，邀请好友</view>
				</view>
				<view class="uni-icon uni-icon-arrowright"></view>
			</view>
			<view class="center-list-item border-bottom" @tap="aboutUs">
				<view class="imgbox">
					<image class="img" mode="widthFix" src="../../static/center-list-4.jpg"></image>
				</view>
				<view class="titbox">
					<view class="tit">关于我们</view>
					<view class="info">ABOUT US</view>
				</view>
				<view class="uni-icon uni-icon-arrowright"></view>
			</view>
		</view>
		<view class="btnbox"> 
			<view class="btn" @tap="goLogin">{{loginTit}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				userInfo: {},
				loginTit:'登录'
			}
		},
		onLoad(){
			var userInfo = uni.getStorageSync("userInfo");
			if(userInfo){
				var userInfo = JSON.parse(userInfo);
				this.login = true;
				this.userInfo = userInfo
			}else{
				this.login = false;
			}
		},
		methods: {
			goLogin(){
				if (!this.login) {
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					uni.setStorageSync("userInfo","");
					this.onLoad();
				}
			},
			goContract(){
				uni.navigateTo({
					url:"../contract/contract"
				})
			},
			store(){
				uni.navigateTo({
					url:"../store/store"
				})
			},
			message(){
				uni.navigateTo({
					url:"../message/message"
				})
			},
			upload(){
				uni.navigateTo({
					url:"../uploadInfo/uploadInfo"
				})
			},
			invite(){
				uni.navigateTo({
					url:"../invite/invite"
				})
			},
			aboutUs(){
				uni.navigateTo({
					url:"../aboutUs/aboutUs"
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
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}
	.bgtop{
		width: 100%;
		height: 240upx;
		background-color: #bfd5ec;
	}
	/* #ifdef MP-WEIXIN */
	.bgtop{
		width: 100%;
		height: 300upx;
		background-color: #bfd5ec;
	}
	/* #endif */

	.logo {
		width: 664upx;
		padding: 34upx 68upx;
		margin: -139upx auto 0 auto;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 10upx;
		text-align: center;
		box-shadow: 0 0 10px #ccc;
	}
	.logo-img{
		width: 120upx;
		height: 120upx;
		border:4px solid #ffffff;
		margin-top:-98upx;
		border-radius: 50%;
	}
	.uer-name{
		font-size: 34upx;
		font-weight: blod;
	}
	.uni-section{
		overflow: hidden;
		margin-top: 30upx;
	}
	.uni-section-item{
		width: 197upx;
		height: 114upx;
		background-color: #f6f6fe;
		border-radius: 10upx;
		text-align: center;
	}
	.uni-section-item .img{
		width: 40upx;
		height: 40upx;
		margin-top:20upx;
	}
	.uni-section-item .tit{
		color: #898989;
		font-size: 17upx;
	}

	.center-list {
		margin-top: 20upx;
		padding: 0 44upx;
	}

	.center-list-item {
		display: flex;
		align-items: center;
		padding: 30upx 0;
	}
	.center-list-item .imgbox{
		width: 25%;
		text-align: center;
	}
	.center-list-item .imgbox .img{
		width: 30%;
		vertical-align: middle;
	}
	.center-list-item .titbox{
		flex: 1;
	}
	.center-list-item .titbox .tit{
		font-size: 26upx;
		font-weight: bold;
	}
	.center-list-item .titbox .info{
		font-size: 22upx;
		color: #666666;
	}
	.center-list-item .uni-icon{
		width: 30upx;
		color: #dcdcdc;
	}
	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #dcdcdc;
		border-bottom-style: solid;
	}
	.btnbox{
		padding: 30upx 0;
	}
	.btnbox .btn{
		width: 361upx;
		height: 75upx;
		margin:0 auto;
		line-height: 75upx;
		color: #fff;
		font-size: 28upx;
		text-align: center;
		background: url(../../static/center-btn.png) round;
	}

	
</style>
