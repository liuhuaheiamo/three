// 完全解构
// let [a, b,  c, d] = [1, 2, 3, 4];
// 不完全解构
// let [a, b, c, d, e] = [1, 2, 3, 4];
// let [a, b, c, d, e] = [1, 2, 3, 4, 5, 6, 7, 8];
// let [a, b, [c], [d]] = [1, 2, [3, 4, 5], 6];
// let [a, ...b] = [1, 2, 3, 4, 5]; //... 扩展运算符
// console.log(a, b);
// 默认值  也可以是函数
// let [a = 1000, b = 100, c = 10] = [1, 2,];  //当解构完 如果c的undefined的时候默认值生效，不是的时候不生效
// let [method = "get"] = []; //例子
// console.log(method);
// console.log(a, b, c);
function test() {
    console.log('hello');
    return 10;     //函数里面没有返回值的话就会默认return一个undefined
};
// let [a = test()] = [1];
// console.log(a);
let [a = test()] = [];
console.log(a);