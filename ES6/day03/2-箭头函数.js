// ES5函数内部属性  this  arguments
// ...a 为rest参数
let test = (...a) => {
    console.log(a);
    // 箭头函数内的arguments不在保存实参
    // console.log(arguments);
};
test(1, 2, 3, 4, 5);