// 创建一个symbol值   基本数据类型  每个值都是独一无二的
let sy = Symbol('sy');   //里面放的是字符串描述
let sy1 = Symbol('sy1');
console.log(sy, sy1);
console.log(sy == sy1);
// 效果：为了解决值的冲突
let obj = {
    name: 'zhnagsan',
    age: 12
};
// Object.defineProperties(obj, {
//     name: {
//         enumerable: false
//     },
//     age: {
//         enumerable: false
//     }
// });
let sy2 = Symbol('新增的名字');
obj[sy2] = 'myname';
console.log(obj);


// let obj2 = {
//     ...obj,
//     // 属性名是变量名用中括号
//     [sy3]: 'myname2'
// };