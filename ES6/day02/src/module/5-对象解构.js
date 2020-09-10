// let { name: username, age: age, gender, friends = 'lihua' } = { name: 'zhangsan', age: 12, gender: '男' };//属性名和变量名相同的话可以省略 属性名:变量名

// console.log(username, age, gender);
let obj = { p: ["hello", { y: 'world' }] };
let { p: [a, { y: b }] } = obj;
console.log(a, b);