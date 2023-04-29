# FuAi_uni-app
FuAi  Cognitive screening

### 运行环境及依赖  
小程序开发者工具Version 3.6.4  
EMAS Serverless 开发者版 @alicloud/mpserverless-sdk  
  
### 使用  
扫码测试  
  
### 介绍  
目前整体分为五个页面  
- index  
- infos  
- questions  
- results  
- mypage  
  
##### index√  
	程序首页，点击认知能力快筛进入infos页面  
##### infos  
	填写个人信息并提交  
	TODO：将用户填写的信息提交至云数据库infos表  
##### questions  
	答题页面，点击next从云数据库导入下一题图片、问题等信息并刷新  
	TODO：点击提交后将用户的答题结果提交至云数据库anwsers表√  
	TODO：点击next后，上一题的选项勾选没有刷新  
	TODO：需要css设置问题layout，现在太粗糙了  
	TODO：目前没有完整题库，云数据库中的题目格式较为固定，如果有新的题型还需要增加对应代码  
##### results  
	展示答题结果  
	TODO：由于questions上传数据至云数据库部分没有完成，计算得分部分还没写，展示的是静态页面half√  
##### mypage√  
	应该不是任务范围  
