<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row">
                <text class="title">手机号：</text>
                <input class="m-input" type="number" v-model="phone" placeholder="请输入手机号" />
				<button class="mini-btn" type="default" size="mini" @tap="bindGetYzm" :disabled="isDisabled">{{txt}}</button>
            </view>
            <view class="input-row">
                <text class="title">验证码：</text>
                <input type="number" v-model="yzm" placeholder="请输入验证码" />
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
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
						url: config.urlArr.baseUrl + 'sms/send', //仅为示例，并非真实接口地址。
						method: 'POST',
						data: {
							mobile: _this.phone,
							event: 'mobilelogin'
						},
						success: (res) => {
							console.log(JSON.stringify(res));
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
						},
						fail: (err) =>{
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
					url: config.urlArr.baseUrl + 'user/mobilelogin', //仅为示例，并非真实接口地址。
					method: 'POST',
					data: {
						mobile: this.phone,
						captcha: this.yzm
					},
					success: (res) => {
						console.log(JSON.stringify(res));
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
    
</style>
