/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PetShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  'MTE1NDQ5OTUwMDAwMDAwNDQ5MjA2NTE=@MTE1NDQ5MzYwMDAwMDAwNDUyNjkyMjU=@MTEzMzI1MTE4NDAwMDAwMDA1MDg1NjgyMw==@MTEyNzEzMjc0MDAwMDAwMDUxNjU2MzIx',
  'MTE1NDAxNzcwMDAwMDAwMzkwMzEzNjU=@MTE1NDQ5MzYwMDAwMDAwNDUyNjkyMjU=@MTEzMzI1MTE4NDAwMDAwMDA1MDg1NjgyMw==@MTEyNzEzMjc0MDAwMDAwMDUxNjU2MzIx',
  'MTE1NDAxNzcwMDAwMDAwMzkwMzEzNjU=@MTE1NDQ5OTUwMDAwMDAwNDQ5MjA2NTE=@MTEzMzI1MTE4NDAwMDAwMDA1MDg1NjgyMw==@MTEyNzEzMjc0MDAwMDAwMDUxNjU2MzIx',
  'MTE1NDAxNzcwMDAwMDAwMzkwMzEzNjU=@MTE1NDQ5OTUwMDAwMDAwNDQ5MjA2NTE=@MTE1NDQ5MzYwMDAwMDAwNDUyNjkyMjU@MTEyNzEzMjc0MDAwMDAwMDUxNjU2MzIx',
  'MTE1NDAxNzcwMDAwMDAwMzkwMzEzNjU=@MTE1NDQ5OTUwMDAwMDAwNDQ5MjA2NTE=@MTE1NDQ5MzYwMDAwMDAwNDUyNjkyMjU=@MTEzMzI1MTE4NDAwMDAwMDA1MDg1NjgyMw==',

]


