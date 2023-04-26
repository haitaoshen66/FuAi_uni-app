Page({
  data: {},
  toDoWrong(){
    my.redirectTo({
       url: '../test/test'
    })
  },
  toIndex: function(){
    my.redirectTo({
       url: 'pages/index/index'
    })
  },
  onLoad() {},
});
