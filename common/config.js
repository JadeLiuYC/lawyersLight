const urlArr = {
	baseUrl:"http://greenjinyi.nat300.top/api/",
}
const uniAjax = function (obj){
	try {
		const token = uni.getStorageSync('token');
		if(token){
			uni.request({
			    url: urlArr.baseUrl + obj.url,
				method: 'GET' || obj.method,
			    data: obj.data,
			    header: {
			        'token': token
			    },
			    success: (res) => {
					//code 
					if(res.code == 401){
						//token不存在
						
						uni.navigateTo({
							url: '',
						});
					}else if(res.code == 0){
						obj.success(res);
					}
			    },
				fail: (err) => {
					uni.showToast({
						title: err.errMsg,
						icon:'none'
					});
				}
			});
		}else{
			//若无token 
			//1、小程序首先获取code判断是否存在用户，不存在则注册并绑定手机号; 2、App则跳转至登录页
			// #ifdef MP-WEIXIN
				wxLogin();
			// #endif
			// #ifdef APP-PLUS
				uni.reLaunch({
					url:'/pages/login/login'
				})
			// #endif
		}
	} catch (e) {
		// error
	}
	
}
function wxLogin(){
	uni.getProvider({
		service: 'oauth',
		success: function (res) {
			console.log(res.provider);
			if (~res.provider.indexOf('weixin')) {
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(JSON.stringify(loginRes));
					}
				});
			}
		}
	});
}

export default {
	urlArr,
	uniAjax,
	wxLogin
}