// // 扩展运算符...   可以进行深复制 复制内容
// // 进行数组解构
let arr = [1, 2, 3, 4, 5]
let [...a] = arr;
// console.log(a === arr);
console.log(a);
// let { ...obj } = { name: 'zhangsan', age: 12 };
// let { ...b } = obj;
// console.log(b);
// console.log(b === obj);



// //  ...运算度在右侧的话比日说...obj 就是展开obj对象里面的内容
// let c = { ...obj, sex: '女' };   //...拓展运算符在右侧就是展开  ，在左侧的就是聚和在一起
// let { gender = '1', ...d } = obj;
// // 添加属性只能
// d.sex = '女';
// console.log(c);
// console.log(d);
// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr, ...arr2];
// console.log(result);