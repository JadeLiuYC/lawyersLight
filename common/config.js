const urlArr = {
	baseUrl:"https://ll.greenjinyi.com/api/",
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
						obj.success(res.data);
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
			uni.reLaunch({
				url:'/pages/login/login'
			})
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