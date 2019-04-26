<template>
	<view class="page">
		<!-- #ifdef MP-WEIXIN -->
			<view class="input-search">
				<input class="uni-input" confirm-type="search" placeholder="请输入律师姓名搜索" />
			</view>
		<!-- #endif -->
		<uni-select :top="top" :selects="selects" @selects-change="selectsChange"></uni-select>
		<view class="uni-lists">
			<view class="uni-lists-item" @tap="goDetail">
				<view class="avatarbox">
					<image class="img" src="../../static/avatar_1.png"></image>
					<view class="ages">执业10年</view>
				</view>
				<view class="aboutbox">
					<view class="uni-infobox">
						<view class="info">
							<view class="name">光头强</view>
							<view class="address"><image class="img" src="../../static/icon-location.png"></image><text class="tit">河南•郑州</text></view>
							<view class="shop">黄金大壮律师事务所</view>
						</view>
						<view class="contact">
							找TA服务
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
	import config from '@/common/config.js';
	import uniSelect from "@/components/uni-select/uni-select.vue";
	export default {
		components:{
			uniSelect
		},
		data() {
			return {
				keyword:'',
				// #ifdef APP-PLUS
				top:0,
				// #endif
				// #ifdef MP-WEIXIN
				top:44,
				// #endif
				selects:[
					{
						id:1,
						name:"全国",
						isSelect:false,
						arr:[
							{
								id:11,
								name:"郑州",
								isSelect:false
							},
							{
								id:12,
								name:"上海",
								isSelect:false
							},
							{
								id:13,
								name:"北京",
								isSelect:false
							},
							{
								id:14,
								name:"深圳",
								isSelect:false
							}
						]
					},
					{
						id:2,
						name:"擅长领域",
						isSelect:false,
						arr:[
							{
								id:21,
								name:"婚姻家事",
								isSelect:false
							},
							{
								id:22,
								name:"房产土地",
								isSelect:false
							},
							{
								id:23,
								name:"民事纠纷",
								isSelect:false
							}
						]
					},
					{
						id:3,
						name:"智能排序",
						isSelect:false,
						arr:[
							{
								id:31,
								name:"综合",
								isSelect:false
							},
							{
								id:32,
								name:"浏览量",
								isSelect:false
							},
							{
								id:33,
								name:"信用",
								isSelect:false
							}
						]
					}
				]
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		onNavigationBarSearchInputConfirmed(event){
			console.log(event.text);
		},
		onNavigationBarSearchInputChanged(event){
			this.keyword = event.text;
			console.log(event.text);
		},
		
		methods: {
			goDetail(){
				uni.navigateTo({
					url:"../detail/detail"
				})
			},
			selectsChange(obj){
				this.selects = obj;
			}
		}
	}
</script>

<style>
	.page{
		padding: 0 30upx;
	}
	.uni-tabs{
		width: 100%;
		display: flex;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #fff;
		padding: 10upx 0;
	}
	.uni-tab{
		flex: 1;
		text-align: center;
		font-size: 24upx;
	}
	.uni-tab .tit{
		color: #626a7a;
		line-height: 48upx;
	}
	.uni-tab .uni-icon{
		font-size: 28upx;
		line-height: 48upx;
	}
	.uni-lists{
		padding-top: 70upx;
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
	/* #ifdef MP-WEIXIN */
	.input-search{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		box-sizing: border-box;
		padding:15upx 30upx;
	}
	.uni-input{
		padding: 0 20rpx;
		background-color: #f8f6f9;
		border-radius: 50upx;
		height: 60rpx;
	}
	.uni-tabs{
		top: 90rpx;
	}
	.uni-lists {
		padding-top:160rpx;
	}
	/* #endif */
</style>
