let name = 'lisi';
let age = 12;
// 列表输出
export { name, age };
// 列表重命名输出
export { name as aa, age as bb };
// 导出单个属性
export let a = 10;

// export function test(x, y) {
//     return x * y;
// };
export default {
    name: 'zhangsan',
    age: 12
};