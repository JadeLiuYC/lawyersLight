<template>
	<view class="page-body">
		<view class="uni-lawyer">
			<image class="img" src="../../static/avatar_2.png"></image>
			<view class="uni-lawyer-infobox">
				<view class="namebox">
					<text class="name">封格林</text>
					<view class="store" @tap="fnStore"><text :class="store ? 'uni-icon uni-icon-star-filled active': 'uni-icon uni-icon-star-filled'"></text><text class="tit">{{storetit}}</text></view>
				</view>
				<view class="addressbox">河南•郑州   执业2年</view>
				<view class="speciality">
					擅长：刑事诉讼、财产损害、人身伤害、 交通肇事、公司经营、婚姻家事 。     
				</view>
			</view>
		</view>
		<view class="uni-lawyer-lists">
			<view class="uni-prompt">
				详细信息
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_1.png"></image>
				<text class="tit">证件号码：15201201711973858</text>
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_2.png"></image>
				<text class="tit">从业机构：郑州金牌大壮律师事务所</text>
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_3.png"></image>
				<text class="tit">电子邮箱：1149762101@qq.com</text>
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_4.png"></image>
				<text class="tit">联系电话：152****2954</text>
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_5.png"></image>
				<text class="tit">擅长：刑事诉讼、财产损害、人身伤害、交通肇事、 公司经营、婚姻家事</text>
			</view>
			<view class="uni-lawyer-item">
				<image class="img" src="../../static/detail_6.png"></image>
				<text class="tit">个人简介：郑州市律师协会刑事专业委员会秘书长， 专职律师，有团队，擅长刑事辩护。</text>
			</view>
		</view>
		<view class="uni-btnbox">
			<view class="uni-selfbtn fl" @tap="addfriend">
				<image class="img" mode="widthFix" src="../../static/detail_weixin.png"></image>
				<text class="tit green">加好友</text>
			</view>
			<view class="uni-selfbtn fr" @tap="tel('0371-65999333')">
				<image class="img" mode="widthFix" src="../../static/detail_tel.png"></image>
				<text class="tit orange">找TA服务</text>
			</view>
		</view>
		<view class="uni-commentbox">
			<view class="uni-prompt">
				我要评价
			</view>
			<view class="uni-lawyer-comment">
				<view class="uni-comment-item active" @tap="comment('0')">非常满意</view>
				<view class="uni-comment-item" @tap="comment('1')">满意</view>
				<view class="uni-comment-item" @tap="comment('2')">一般</view>
			</view>
		</view>
		<view class="uni-commnet-lists">
			<view class="uni-prompt">
				评价列表
			</view>
			<view class="uni-commnet-list">
				<view class="uni-commnet-list-item">
					<image class="img" src="../../static/logo.png"></image>
					<text class="name">159****9999</text>
					<text class="comment">非常满意</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store: false,
				storetit:"收藏"
			}
		},
		
		onLoad(event) {
			this.getDetail();
		},
		methods: {
			getDetail() {
				
			},
			fnStore(){
				this.store = true;
				this.storetit = "已收藏"
			},
			addfriend(){
				uni.navigateTo({
					url:"../qrcode/qrcode"
				})
			},
			tel(phone){
				uni.makePhoneCall({
					phoneNumber:phone
				})
			},
			comment(index){
				uni.showToast({
					title: index,
					icon: 'none'
				})
			}
		}
	}
</script>

<style>
	.page-body{
		padding: 0 44upx 40upx 44upx;
	}
	.uni-lawyer{
		display: flex;
		align-items: center;
		padding: 33upx 0;
		border-bottom: 1px solid #dcdcdc;
	}
	.uni-lawyer .img{
		width: 180upx;
		height: 180upx;
		border-radius: 50%;
		border: 1px solid #dcdcdc;
	}
	.uni-lawyer-infobox{
		padding-left: 44upx;
		flex: 1;
		color: #666666;
	}
	.uni-lawyer-infobox view{
		font-size: 23upx;
	}
	.uni-lawyer-infobox .namebox{
		display: flex;
	}
	.uni-lawyer-infobox .namebox .name{
		font-size: 34upx;
		width: 60%;
		color: #333333;
	}
	.uni-lawyer-infobox .namebox .store{
		flex: 1;
		text-align: right;
	}
	.uni-lawyer-infobox .namebox .store .uni-icon{
		font-size: 32upx;
		vertical-align: middle;
		margin-right: 5upx;
	}
	.uni-lawyer-infobox .namebox .store .uni-icon.active{
		color: #f47505;
	}
	.uni-lawyer-infobox .namebox .store .tit{
		font-size: 24upx;
		vertical-align: middle;
	}
	.uni-prompt{
		font-size: 34upx;
		padding: 0 20upx;
		margin: 30upx 0;
		border-left: 2px solid #f47505;
	}
	.uni-lawyer-item{
		display: flex;
		align-items: center;
		margin-bottom: 35upx;
	}
	.uni-lawyer-item .img{
		width: 40upx;
		height: 40upx;
	}
	.uni-lawyer-item .tit{
		padding-left: 40upx;
		flex: 1;
		font-size: 23upx;
	}
	.uni-btnbox{
		overflow: hidden;	
	}
	.uni-selfbtn{
		width: 49%;
		text-align: center;
		background-color: #f8f6f9;
		height: 90upx;
		line-height: 90upx;
	}
	.uni-selfbtn .img{
		width: 50upx;
		vertical-align: middle;
		margin-right: 10upx;
	}
	.uni-selfbtn .tit{
		font-size: 23upx;
		vertical-align: middle;
	}
	.uni-selfbtn .tit.green{
		color: #04ae0f;
	}
	.uni-selfbtn .tit.orange{
		color:#f3690c;
	}
	.uni-lawyer-comment{
		display: flex;
	}
	.uni-comment-item{
		flex: 1;
		text-align: center;
		color: #fff;
		background-color: #a4a3a2;
		margin: 0 10upx;
		padding: 10upx 0;
		font-size: 24upx;
		border-radius: 30upx;
	}
	.uni-comment-item.active{
		background-color: #f47505;
	}
	.uni-commnet-list-item{
		display: flex;
		font-size: 23upx;
		padding: 10upx 0;
		border-bottom: 1px solid #dcdcdc;
	}
	.uni-commnet-list-item .img{
		width: 65upx;
		height: 65upx;
	}
	.uni-commnet-list-item .name{
		padding-left: 20upx;
		flex: 1;
	}
	.uni-commnet-list-item .comment{
		width: 140upx;
		height: 50upx;
		line-height: 50upx;
		color: #fff;
		border-radius: 40upx;
		background-color: #f47505;
		text-align: center;
	}
</style>
