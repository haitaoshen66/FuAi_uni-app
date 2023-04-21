import MPServerless from '@alicloud/mpserverless-sdk'

const mpserverless = new MPServerless(my,{
  appId: '2021003188611137',
  spaceId: 'mp-45d84e54-2685-407a-b4f6-ed27b00a8692',
  clientSecret: '8joIwMQr26OOfOM/pQRtJw==',
  endpoint: 'https://api.next.bspapp.com',
});



App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    mpserverless: mpserverless,
    mpserverless.init();
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    
  },

});
