Page({
  data: {
    canIUseAuthButton: my.canIUse('button.open-type.getAuthorize')
  },
  confirm(){
    my.confirm({
      title: '测试规则',
      content: '您将有10秒钟时间记忆图片，随后您需要选择已出现过的图片',
      confirmButtonText: '开始测试',
      cancelButtonText: '取消',
      success: (result) => {
        if(result.confirm){
          my.navigateTo({
            url: '../Test/Test'
        })
        }
      } 
    })
  },
  getOpenUserInfo() {
    my.getOpenUserInfo({
        success: (res) => {
            let userInfo = JSON.parse(res.response).response
        },
        fail: (err) => {
            console.log(err)
        }
    });
},
  onLoad() {},
  onShow(){
  
  }
});
