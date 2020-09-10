// 引入babel-polyfill
// 模块导入
import 'babel-polyfill'   //代表使用第三方的包  逐层向上找，找不到就报错，就近原则使用
let a = 1;
//Set数据结构
let set = new Set();
// 添加内容
set.add('zhangsan');
console.log(set);
let arr = [1, 2, 3];
let result = Array.from(arr);
console.log(result);
