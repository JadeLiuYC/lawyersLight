<template>
	<view class="container">
		<!-- #ifdef APP-PLUS -->  
		<view class="status_bar">  
			<view class="top_view"></view>
		</view>  
		<!-- #endif -->
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in categoryList">
					<text class="tit">{{item.NAME}}</text>
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index">
					<image :src="item.LOGO" mode="widthFix" :lazy-load="true" />
					<view class="tit">{{item.NAME}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:"",
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				this.subCategoryList = categroy.subCategoryList;
				this.scrollTop = -this.scrollHeight * index;
			},
			getCategory() {
				for (var i = 1; i < 21; i++) {
					var subList = [];
					for (var j = 1; j < 31; j++) {
						subList.push({
							"NAME": "分类" + i + ":商品" + j,
							"LOGO": "http://placehold.it/50x50"
						})
					}
					this.categoryList.push({
						"NAME": "分类" + i,
						"subCategoryList": subList
					})
				}
				this.subCategoryList = this.categoryList[0].subCategoryList;
			}
		},
		onLoad: function () {
			this.getCategory();
			this.height = uni.getSystemInfoSync().windowHeight;
		},
		onNavigationBarSearchInputConfirmed(event){
			console.log(event.text);
		},
		onNavigationBarSearchInputChanged(event){
			this.keyword = event.text;
			console.log(event.text);
		},
	}
</script>

<style>
	.page-body {
		display: flex;
		width: 100%;
		box-sizing: border-box;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 25%;
	}

	.nav-left-item {
		height: 100upx;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nav-left-item .tit{
		font-size: 24upx;
		padding: 0 30upx;
		border-radius: 30upx;
	}

	.nav-right {
		width: 75%;
		background-color: #f8f6f9;
		padding-top: 15upx;
	}

	.nav-right-item {
		width: 33%;
		float: left;
		text-align: center;
		margin-bottom: 20upx;
	}

	.nav-right-item image {
		width: 80%;
		height: 200upx;
	}
	.nav-right-item .tit{
		font-size: 20upx;
		width: 100%;
		height: 28upx;
		line-height: 28upx;
		overflow: hidden;
	}

	.nav-left-item.active .tit {
		background-color: #f47505;
		color: #fff;
	}
</style>

