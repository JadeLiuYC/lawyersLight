<template>
	<view class="page-body">
		<view class="qrcodebox">
			<image class="avator" src="../../static/avatar_2.png"></image>
			<view class="name">二维码名片：张律师</view>
			<view class="tit">
				<view>将二维码保存至相册</view>
				<view>使用微信扫描二维码，添加好友</view>
			</view>
			<image class="qrcode" src="../../static/avatar_1.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(event){
			uni.downloadFile({
				url: 'https://www.example.com/file/test', //仅为示例，并非真实的资源
				success: (res) => {
					if (res.statusCode === 200) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function () {
								uni.showToast({
									title:"保存成功！",
									icon:"none"
								})
							}
						});
					}
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color: #f8f6f9;
	}
	.qrcodebox{
		width: 666upx;
		text-align: center;
		margin: 145upx auto 0 auto;
		background-color: #ffffff;
		position: relative;
		padding-top: 100upx;
		padding-bottom: 40upx;
	}
	.avator{
		width: 172upx;
		height: 172upx;
		position: absolute;
		left: 50%;
		margin-left: -86upx;
		top: -86upx;
		border-radius: 50%;
	}
	.name{
		text-align: center;
		width: 50%;
		color: #ffffff;
		margin: 10upx auto;
		padding: 10upx 0;
		border-radius: 50upx;
		background-color: #f47505;
	}
	.tit{
		text-align: center;
		font-size: 24upx;
		color: #666666;
	}
	.qrcode{
		width: 500upx;
		height: 500upx;
		margin-top: 30upx;
	}
</style>
