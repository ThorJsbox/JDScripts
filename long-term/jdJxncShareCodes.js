/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// github action用户的好友助力码填写到Action->Settings->Secrets->new Secret里面(Name填写 JxncShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写助力码,填写规则如下)
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let JxncShareCodes = [

  '86b887e219da78a3f98bc4652f004b9f@6d1e15cf5c34035e3b6318bcd365ec20',
  '7e69b4a19ae96f6b9db72134c379fcae@15cf5c34035e3b6318bcd365ec20',
  '7e69b4a19ae96f6b9db72134c379fcae@86b887e219da78a3f98bc4652f004b9f',
  
]

