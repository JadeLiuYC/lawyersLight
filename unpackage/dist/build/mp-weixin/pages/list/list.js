(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"715d":function(t,e,n){"use strict";var i=n("dfb1"),a=n.n(i);a.a},ab60:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},b054:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=n("cac5");function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,r,s){try{var o=t[r](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function o(t){s(r,i,a,o,u,"next",t)}function u(t){s(r,i,a,o,u,"throw",t)}o(void 0)})}}var u=function(){return n.e("components/uni-media-list/uni-media-list").then(n.bind(null,"f5cd"))},c=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"8dce"))},d={components:{uniMediaList:u,uniLoadMore:c},data:function(){return{loadingText:{contentdown:"上拉加载更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,refreshing:!1,refreshText:"下拉可以刷新",newsList:[],tabIndex:0,tabBars:[{name:"最新",id:0,ref:"new"},{name:"大公司",id:23,ref:"company"},{name:"内容",id:223,ref:"content"},{name:"消费",id:221,ref:"xiaofei"},{name:"娱乐",id:225,ref:"yule"},{name:"区块链",id:208,ref:"qukuailian"}]}},computed:{scrollViewHeight:function(){return"height:"+t.getSystemInfoSync().windowHeight+"px"}},onLoad:function(){var t=this;this.tabBars.forEach(function(e,n){t.newsList.push({id:"tabBar"+n,data:[],requestParams:{columnId:e.id,minId:0,pageSize:10,column:"id,post_id,title,author_name,cover,published_at,comments_count"},loadingText:"加载中..."})}),this.getList()},methods:{getList:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.newsList[this.tabIndex];i.requestParams.time=(new Date).getTime()+"",1===n&&(i.requestParams.minId=0),this.loadingText="加载中...",t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:i.requestParams,success:function(t){if(200==t.statusCode){var r=t.data.map(function(t){return{id:t.id,article_type:1,datetime:(0,a.friendlyDate)(new Date(t.published_at.replace(/\-/g,"/")).getTime()),title:t.title,image_url:t.cover,source:t.author_name,comment_count:t.comments_count,post_id:t.post_id}});1===n?(i.data=r,e.refreshing=!1):r.forEach(function(t){i.data.push(t)}),i.requestParams.minId=r[r.length-1].id}}})},goDetail:function(e){t.navigateTo({url:"/pages/detail/detail?query="+encodeURIComponent(JSON.stringify(e))})},dislike:function(e,n){var i=this;t.showModal({content:"不感兴趣？",success:function(t){t.confirm&&i.newsList[e].data.splice(n,1)}})},loadMore:function(){this.getList(2)},changeTab:function(){var e=o(i.default.mark(function e(n){var a,r,s,o,u,c,d,f,l,h;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=n.detail.current,!this.isClickChange){e.next=5;break}return this.tabIndex=a,this.isClickChange=!1,e.abrupt("return");case 5:return e.next=7,this.getElSize("tab-bar");case 7:r=e.sent,s=r.scrollLeft,o=0,u=0;case 11:if(!(u<a)){e.next=19;break}return e.next=14,this.getElSize(this.tabBars[u].ref);case 14:c=e.sent,o+=c.width;case 16:u++,e.next=11;break;case 19:return d=t.getSystemInfoSync().windowWidth,e.next=22,this.getElSize(this.tabBars[a].ref);case 22:f=e.sent,l=f.width,o+l-s>d&&(this.scrollLeft=o+l-d),o<s&&(this.scrollLeft=o),this.isClickChange=!1,this.tabIndex=a,h=this.newsList[this.tabIndex],0===h.data.length&&this.getList();case 30:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),getNodeSize:function(t){return new Promise(function(e,n){dom.getComponentRect(t,function(t){e(t.size)})})},onRefresh:function(t){this.refreshText="正在刷新...",this.refreshing=!0,this.getList()},getElSize:function(e){return new Promise(function(n,i){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){n(t)}).exec()})},tapTab:function(){var t=o(i.default.mark(function t(e){var n;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tabIndex!==e){t.next=4;break}return t.abrupt("return",!1);case 4:this.tabIndex=e,n=this.newsList[this.tabIndex],0===n.data.length&&this.getList();case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=d}).call(this,n("543d")["default"])},dfb1:function(t,e,n){},e20a:function(t,e,n){"use strict";n.r(e);var i=n("b054"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},f311:function(t,e,n){"use strict";n.r(e);var i=n("ab60"),a=n("e20a");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("715d");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports}},[["61a8","common/runtime","common/vendor"]]]);