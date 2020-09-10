// es6的导入
// 运行
// import 'module1';   没有点斜杠的话就相当于，当做第三方模块
// import './module1';
//import { } from './module1'
// import { firstname, lastname } from '../../dist/module/module1';
// import { firstname, lastname, first, last as f, a, test } from '../../dist/module/module1';
// console.log('module2打印', firstname, lastname);
// console.log('module2打印', firstname, first, lastname, last, f, a, test);
// import { a, test } from './module1';
// console.log(a, test);
// test();
// import * as obj from './module1';
// console.log(obj);
// 只有默认导出的h话使用一下方法
import person from './module1';  //相当于声明一个变量接受数据
console.log(person);