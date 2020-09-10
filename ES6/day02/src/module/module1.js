// 导出  es6模块导出
let firstname = 'ren';
let lastname = 'terry';
console.log('这是module1模块');

// 导出 以列表导出
export { firstname, lastname };
//重命名导出
export { firstname as first, lastname as last };
// 导出一个属性
export let a = 1;
export function test() {
    console.log(1);
};
// 默认导出
export default {
    name: 'zhangsan',
    age: 12
};   //代表导出一个对象
// 一般 某个模块有export和default导出的话 使用*全部导出
// export default ;   //代表导出一个对象