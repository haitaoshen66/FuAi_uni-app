Page({
  data: {
    isSub: 0,
    score: 0,
    hidden: true,
    showed: [],
    picForTest: [],
    picList: [{
        src: '/image/1.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/2.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/3.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/4.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/5.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/6.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/7.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/8.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/9.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/10.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/11.jpg',
        isChosen: 0,
        ispre: 0
      },
      {
        src: '/image/12.jpg',
        isChosen: 0,
        ispre: 0
      },
    ]
  },
  onLoad() {
    var that = this;
    that.makeShowed();
    that.initPicForTest();
    var that = this;
    let st = 1;
    this.mixUpArray(this.data.showed)
    that.makePicForTest(0);
    that.makePicForTest(1);
    that.makePicForTest(2)
    this.setData({
      content: "请记住下面出现的图片："
    })
    this.setData({
      cd: st
    })


    var setinterval = setInterval(countdown, 1000);

    function countdown() {
      if (st == 1) {
        clearInterval(setinterval);
      }
      st -= 1;
      that.setData({
        cd: st
      });
      if (st == 0) {
        that.setData({
          hidden: false,
        })

      }
    }

    const {
      mpserverless
    } = getApp();

    mpserverless.db.collection('test').find();
    mpserverless.function.invoke('test');
  },
  onReady() {},
  onShow() {
    this.setData({
      isSub: 0
    })
    this.checkAlert()
  },
  onUnload() {
    this.data.showed.splice(0);

  },

  checkAlert() {
    if (this.data.isSub == 0) {
      my.enableAlertBeforeUnload({
        message: '当前页面还有未提交的内容\n确定返回吗？',
        success: res => {
          this.data.showed.splice(0);
        }
      })
    } else {
      my.disableAlertBeforeUnload({})
    }
  },

  onSubmit(e) {
    let sc = 0;
    var that = this;

    if (that.data.picList[e.detail.value.t1].isChosen == 1) sc += 10;
    if (that.data.picList[e.detail.value.t2].isChosen == 1) sc += 10;
    if (that.data.picList[e.detail.value.t3].isChosen == 1) sc += 10;

    that.setData({
      isSub: 1
    })
    this.checkAlert()
    my.alert({
      content: `您的得分为：${sc}`
    })
  },

  initPicForTest() {
    var that = this;
    for (let i = 0; i < 3; i++) {
      that.setData({
        ['picForTest[' + i + ']']: []
      })
    }
  },
  makeShowed() {
    var that = this;
    let nowHave = 0;
    for (; nowHave < 3;) {
      let n = Math.floor(Math.random() * 12);
      if (that.data.picList[n].isChosen == 0) {
        that.setData({
          ['picList[' + n + '].isChosen']: 1
        })
        that.data.showed.push(n);
        nowHave++;
      }
    }
  },
  mixUpArray(arr) {
    let l = arr.length
    let index, temp
    while (l > 0) {
      index = Math.floor(Math.random() * l)
      temp = arr[l - 1]
      arr[l - 1] = arr[index]
      arr[index] = temp
      l--
    }
    return arr
  },
  makePicForTest(num) {
    var that = this;
    that.data.picForTest[num].push(that.data.showed[num]);
    let nowHave = 1;
    for (; nowHave < 4;) {
      let n = Math.floor(Math.random() * 12);
      if (that.data.picList[n].isChosen == 0 && that.data.picList[n].ispre == 0) {
        that.setData({
          ['picList[' + n + '].ispre']: 1
        })
        that.data.picForTest[num].push(n);
        nowHave++;
      }
    }
    that.mixUpArray(that.data.picForTest[num])
  },

});