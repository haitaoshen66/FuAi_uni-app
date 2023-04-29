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
    console.info("app lauch")
    mpserverless.init(
      {authorType: 'anonymous'}
    );
  
  },
  
  onShow(options) {

  },
});
