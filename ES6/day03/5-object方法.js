// // object 的静态方法
// console.log(1 === 1);
// console.log(Object.is(1, 1));
// console.log(Object.is(1, 2));
// console.log(+0 === -0);
// console.log(Object.is(+0, -0));   //某种意义上不是一个值
// console.log(NaN === NaN);
// console.log(Object.is(NaN, NaN));
// console.log(isNaN(NaN));

let obj = {
    name: 'zhangsan',
    age: 12
};
// 实现深复制  或者对象拷贝  可以用O
// {}是目标对象
// let o = {};
// // 将obj对象复制到o中并且返回o对象
// let result = Object.assign(o, obj);
// console.log(o);
// console.log(o === result);


// 对象的合并
let obj2 = { name: 'lisi', gender: '1' };
let o = {};
// 将obj  obj2 全部复制到o中并且返回o   反面覆盖前面的同类属性
let result = Object.assign(o, obj, obj2);
console.log(o);
console.log(o === result);