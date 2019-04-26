<template>
	<view class="uni-select" :style="{top:top+'px'}">
		<view class="uni-select-content">
			<view class="uni-tabs-select" >
				<view v-for="(select,index) in selectsData" :key="select.id" @tap="showSelect(index)" v-bind:class="[select.isSelect ? 'uni-tab-select active':'uni-tab-select']">
					<text class="tit">{{select.name}}</text>
					<text :class="active == index ? 'uni-icon uni-icon-arrowup':'uni-icon uni-icon-arrowdown'"></text>
					<!-- <image class="img" :src="active == index ? '../../static/arrowup.png' : '../../static/arrowdown.png'"></image> -->
				</view>
				<view class="uni-tab-select-reset" @tap="reset">
					<text class="tit">重置</text>
				</view>
			</view>
			<view class="uni-down-select" v-if="active > -1">
				<view v-for="(item,key) in selectsData[active].arr" :key="item.id" v-bind:class="[item.isSelect ? 'uni-down-item-select active':'uni-down-item-select']" @tap="chooseSelect(item.id)">
					<text>{{item.name}}</text>
					<text class="uni-icon uni-icon-checkmarkempty" v-if="item.isSelect"></text>
				</view>
			</view>
		</view>		
		<view class="mask" @tap="hideMask" v-show="active > -1"></view>
	</view>
</template>

<script>
	export default {
		name:'uni-select',
		props:{
			top: {
				type: Number,
				default: 0
			},
			obj:{
				type: Object,
				default: function(e){
					return {}
				}
			},
			selects:{
				type: Array,
				default: function(e){
					return []
				}
			}
		},
		mounted() {
			uni.setStorageSync('selects', JSON.stringify(this.selects));
		},
		methods:{
			showSelect(index){
				this.active = index;
			},
			hideMask(){
				this.active = -1;
			},
			chooseSelect(id){
				var selectsData = this.selectsData;
				var len1 = selectsData.length;
				for(var i = 0; i < len1; i++ ){
					if(i == this.active){
						selectsData[i].isSelect = true;
						var len2 = selectsData[i].arr.length;
						for(var k = 0; k <len2; k++){
							if(selectsData[i].arr[k].id == id){
								selectsData[i].arr[k].isSelect = true;
								selectsData[i].name = selectsData[i].arr[k].name;
							}else{
								selectsData[i].arr[k].isSelect = false;
							}
						}
						break;
					}
				}
				this.$emit('selectsChange',selectsData)
				this.active = -1;
			},
			//重置下拉选择
			reset(){
				this.selectsData = JSON.parse(uni.getStorageSync("selects"))
			}
		},
		data(){
			return{
				active: -1,
				selectsData:this.selects
			}
		}
	}
</script>

<style>
	.uni-select{
		width: 100%;
		position: fixed;
		left: 0;
		background-color: #fff;
		z-index: 99;
	}
	.mask{
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 97;
		background-color: rgba(0,0,0,0.2);
	}
	.uni-select-content{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 98;
	}
	.uni-tabs-select{
		display: flex;
		align-items: center;
		padding: 10upx 0;
		background-color: #fff;
		border-bottom: 1px solid #dcdcdc;
	}
	.uni-tab-select{
		flex: 1;
		text-align: center;
		font-size: 24upx;
	}
	.uni-tab-select-reset{
		width: 15%;
		text-align: center;
		font-size: 24upx;
	}
	.uni-tab-select.active{
		color: #ff4c01;
	}
	.uni-tab-select.active .tit{
		color: #ff4c01;
	}
	.uni-tab-select .tit{
		color: #626a7a;
		line-height: 50upx;
		vertical-align: middle;
		margin-right: 5upx;
	}
	.uni-tab-select .uni-icon{
		font-size: 25upx;
		vertical-align: middle;
	}
	.uni-down-select{
		box-sizing: border-box;
		padding: 0 30upx;
		background-color: #fff;
		max-height: 800upx;
		overflow-y: auto;
	}
	.uni-down-item-select{
		padding: 20upx 20upx;
		border-bottom: 1px solid #dcdcdc;
		overflow: hidden;
	}
	.uni-down-item-select .uni-icon{
		color: #ff4c01;
		width: 30upx;
		float: right;
	}
	.uni-down-item-select.active{
		color: #ff4c01;
	}
</style>
