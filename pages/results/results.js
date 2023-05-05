const app = getApp();
const mpserverless = app.mpserverless;
Page({
  data: {
    score: 0,
    total: 10
  },
  onLoad(e) {
    this.setData({score:e.score})
    // mpserverless.db.collection('anwsers')
    //   .findOne({

    //   }, {
    //     projection: { score: 1 }
    //   })
    //   .then(res => { 
    //     this.setData({
    //       score: res.result.score
    //     })
    //   })
    //   .catch(console.error);
  },
  toDoWrong(){
    my.navigateTo({
       url: '../questions/questions'
    })
  },
  toIndex: function(){
    my.switchTab({
       url: '../index/index'
    })
  },
});
