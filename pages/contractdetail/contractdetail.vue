<template>
	<view class="page-body">
		<view class="imgbox">
			<image class="img" mode="widthFix" src="../../static/avatar_2.png"></image>
			<image class="img" mode="widthFix" src="../../static/avatar_2.png"></image>
			<image class="img" mode="widthFix" src="../../static/avatar_2.png"></image>
		</view>
		<view class="section">
			<view class="title">
				劳务合同
			</view>
			<view class="prompt">
				<view class="font">
					【如遇合同下载、打开等问题，请联系平台服务。】
				</view>
				<view class="font">
					该文书为.doc/.docx格式，推荐您使用word软件打开，文档字体及段落格式参见预览效果，下载后不会带有“logo”水印，方便您的使用。
				</view>
				<button type="default" class="uni-btn uni-btn-blocked" @tap="fnDownload">下载</button>
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
			fnDownload(){
				uni.downloadFile({
					url: 'https://www.example.com/file/test', //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: function (res) {
									uni.showToast({
										title: "已下载",
										icon: "none"
									})
								}
							});
						}
					}
				});
			}
		}
	}
</script>

<style>
	.imgbox{
		background-color: #f6f6fe;
		padding: 44upx;
		display: flex;
		align-items: center;
	}
	.imgbox .img{
		flex: 1;
	}
	.imgbox .img:nth-child(2){
		margin: 0 40upx;
	}
	.section{
		padding: 44upx;
	}
	.title{
		font-size: 34upx;
		padding: 0 20upx;
		border-left: 2px solid #f47505;
	}
	.prompt{
		margin-top: 20upx;
		font-size: 22upx;
		color: #999;
	}
	button.uni-btn{
		margin-top: 100upx;
		border-radius: 50upx;
		color: #fff;
		font-size: 30upx;
		background: #f47505;
	}
	.uni-btn:after{
		border:none;
	}
</style>
