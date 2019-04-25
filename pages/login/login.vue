<template>
	<view class="page-body">
		<view class="titbox">
			<view class="tit">手机快捷登录</view>
			<view>未注册过的手机号将自动创建账号</view>
		</view>
		<view class="content">
		    <view class="input-group">
		        <view class="input-row">
		            <input class="m-input" type="number" v-model="phone" placeholder="请输入手机号" />
					<button class="mini-btn" type="default" size="mini" @tap="bindGetYzm" :disabled="isDisabled">{{txt}}</button>
		        </view>
		        <view class="input-row">
		            <input type="number" v-model="yzm" placeholder="请输入验证码" />
		        </view>
		    </view>
		    <view class="btn-row">
		        <button type="primary" class="primary uni-btn-blocked" @tap="bindLogin">登录</button>
		    </view>
		</view>
	</view>
</template>

<script>
	import config from '@/common/config.js';
	const phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
	
    export default {
        data() {
            return {
                phone: '',
                yzm: '',
                positionTop: 0,
				txt:'获取验证码',
				isDisabled: false
            }
        },
        methods: {
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
			bindGetYzm(){
				var _this = this;
				if (_this.phone && phoneReg.test(_this.phone)) {
					uni.request({
						url: config.urlArr.baseUrl + 'sms/send', 
						method: 'POST',
						data: {
							mobile: _this.phone,
							event: 'mobilelogin'
						},
						success: (res) => {
							console.log(JSON.stringify(res));
							if(res.data.code == 1){
								let num = 20;
								_this.isDisabled = true;
								let timer = setInterval(function(){
									if(num > 1){
										num--;
										_this.txt = num+'s后重新获取'
									}else{
										clearInterval(timer);
										_this.isDisabled = false;
										_this.txt = '获取验证码'
									}
								},1000)
							}else{
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								})
							}
						},
						fail: (err) =>{
							console.log(JSON.stringify(err))
							uni.showToast({
								title: err.errMsg,
								icon:'none'
							});
						}
					}); 
				}else{
					uni.showToast({
					    icon: 'none',
					    title: '请重新输入手机号'
					});
				}
			},
            bindLogin() {
                if (!phoneReg.test(this.phone)) {
                    uni.showToast({
                        icon: 'none',
                        title: '请重新输入手机号'
                    });
                    return;
                }
                if (!this.yzm) {
                    uni.showToast({
                        icon: 'none',
                        title: '请重新输入验证码'
                    });
                    return;
                }
				uni.request({
					url: config.urlArr.baseUrl + 'user/mobilelogin', 
					method: 'POST',
					data: {
						mobile: this.phone,
						captcha: this.yzm
					},
					success: (res) => {
						if(res.data.code == 1){
							uni.showToast({
								title: '登录成功',
								icon: 'none'
							})
							try {
								uni.setStorageSync('userInfo', JSON.stringify(res.data.data.userinfo));
								uni.setStorageSync('token', res.data.data.userinfo.token);
								uni.reLaunch({
									url:"../ucenter/ucenter"
								})
							} catch (e) {
								// error
							}
						}else if(res.data.code == 0){
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}
					},
					fail: (err) =>{
						console.log(JSON.stringify(err));
					}
				});
            }
        },
        onReady() {
            this.initPosition();
        }
    }
</script>

<style>
	page{
		width: 100%;
		box-sizing: border-box;
	}
	.titbox{
		background-color: #bfd5ec;
		color: #fff;
		padding: 200upx 50upx 20upx 50upx;
		font-size: 24upx;
	}
	.titbox .tit{
		font-size: 34upx;
	}
    .content{
		padding: 80upx 50upx;
	}
	.input-row{
		display: flex;
		align-items: center;
		padding: 30upx 0;
		border-bottom: 1px solid #dcdcdc;
	}
	.input-row input{
		flex: 1;
	}
	.mini-btn{
		border: none;
		background-color: #fff;
	}
	.mini-btn:after{
		border: none;
	}
	.uni-btn-blocked{
		font-size: 30upx;
		margin-top: 80upx;
	}
</style>
