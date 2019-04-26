<template>
	<view class="page-body">
		<view class="uni-lists">
			<view class="uni-lists-item">
				<view class="avatarbox">
					<image class="img" src="../../static/avatar_1.png"></image>
					<view class="ages">执业10年</view>
				</view>
				<view class="aboutbox">
					<view class="uni-infobox">
						<view class="info">
							<view class="name">光头强</view>
							<view class="address"><image class="img" src="../../static/icon-location.png"></image><text class="tit">河南 • 郑州</text></view>
							<view class="shop">黄金大壮律师事务所</view>
						</view>
						<view class="contact" @tap="cancelStore">
							取消收藏
						</view>
					</view>
					<view class="uni-speciality">
						<view class="uni-speciality-item">婚姻家事</view>
						<view class="uni-speciality-item">房产土地</view>
					</view>
				</view>
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
			cancelStore(){
				
			}
		}
	}
</script>

<style>
	.page-body{
		padding: 0 30upx;
	}
	.uni-lists-item{
		color: #818a99;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f5f5f5;
		padding:20upx 0;
	}
	.uni-lists-item .avatarbox{
		width: 120upx;
		padding-right: 25upx;
	}
	.uni-lists-item .avatarbox .img{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.uni-lists-item .avatarbox .ages{
		text-align: center;
		font-size: 23upx;
	}
	.uni-lists-item .aboutbox{
		flex: 1;
		
	}
	.uni-infobox{
		display: flex;
		align-items: center;
	}
	.uni-infobox .info{
		flex: 1;
	}
	.uni-infobox .info view{
		font-size: 23upx;
	}
	.uni-infobox .info .name{
		font-size: 28upx;
		color: #333333;
		margin-bottom: 5upx;
	}
	.uni-infobox .info .address{
		height: 30upx;
		line-height: 30upx;
		overflow: hidden;
	}
	.uni-infobox .info .address .img{
		width: 19upx;
		height: 25upx;
		vertical-align: middle;
		margin-right: 10upx;
	}
	.uni-infobox .info .address .tit{
		vertical-align: middle;
	}
	.uni-infobox .contact{
		width: 140upx;
		text-align: center;
		font-size: 23upx;
		border-radius: 30upx;
		color: #fff;
		background-color: #f47505;
	}
	.uni-speciality{
		overflow: hidden;
		margin-top: 5upx;
	}
	.uni-speciality .uni-speciality-item{
		font-size: 23upx;
		float: left;
		margin-right: 10upx;
		margin-bottom: 10upx;
		border: 1px solid #818a99;
		border-radius: 10upx;
		padding: 0 8upx;
	}
</style>
