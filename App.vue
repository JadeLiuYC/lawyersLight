<script>
	export default {
		onLaunch: function () {
			//App检测更新，提示用户下载
			//#ifdef APP-PLUS  
			var server = "https://www.example.com/update"; //检查更新地址   
			uni.request({  
				url: server,  
				success: (res) => {
					if (res.statusCode == 200 && res.data.status === 1) {  
						uni.showModal({ //提醒用户更新  
							title: "更新提示",  
							content: res.data.note,  
							success: (res) => {  
								if (res.confirm) { 
									//下载安装包
									uni.downloadFile({
										url: 'https://www.example.com/file/test', //仅为示例，并非真实的资源
										success: (res) => {
											if (res.statusCode === 200) {
												//安装下载包
												if(uni.getSystemInfoSync().platform === 'android'){
													plus.runtime.install(res.tempFilePath);
												}else{
													var url='itms-apps://itunes.apple.com/cn/app/hello-h5+/id682211190?l=zh&mt=8';
													plus.runtime.openURL(url); 
												}
											}
										}
									});  
								}  
							}  
						})  
					}  
				}  
			})  
			//#endif
		},
		onShow: function () {
			
		},
		onHide: function () {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
