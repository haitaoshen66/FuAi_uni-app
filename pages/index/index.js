Page({
  data:{

  },
  goToTest(){
    my.navigateTo({
      url: '/pages/infos/infos'
    })
  },
  onLoad() {
    // 页面加载
    
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '快来参与答题吧',
      desc: '赋爱',
      path: 'pages/index/index',
    };
  },
});
