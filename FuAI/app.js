import MPServerless from '@alicloud/mpserverless-sdk'
const mpserverless = new MPServerless(my,{
  appId: '2021003188611137',
  spaceId: 'mp-e80bfd43-4c9f-4c73-9ec5-bc3abf6cfed9',
  clientSecret: 'zbPQtYcUniWqD8NbU3jDqA==',
  endpoint: 'https://api.next.bspapp.com',
});

App({
  mpserverless: mpserverless,
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    mpserverless.init({authorType: 'anonymous'});
    console.info('App onLaunch');

    const res = mpserverless.function.invoke('TwoNumberSum', {
      name: 'emas'
    })//.then((res) => {
      //if (res.success && res.result) {
        //this.setData({ imageList: res.result.images });
      //  console.log("suck")
      //}
    //}).catch(console.error)
    ;

    const dbRes = mpserverless.db.collection('questions').find({
      age:{$gt: 11}
    });

    mpserverless.db.collection('questions').insertOne({
      name:'hello world'
    })

    console.info('LLLL');
    console.log(res)
    console.log(dbRes)
    console.info('LLLL');
  
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
