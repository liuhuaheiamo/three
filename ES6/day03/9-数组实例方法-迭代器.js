let arr = [2, 3, 4, 5, 6, 2];
// 查找2元素  find是迭代参数
// 查找大于2的元素，返回第一个符合的元素   找不到返回undefined
// findIndex 返回结果是第一个满足条件的索引或者是-1
// let result = arr.find((item) => {
//     // console.log(item, index);
//     return item > 4;
// });
// let result = arr.findIndex((item) => {
//     // console.log(item, index);
//     return item > 4;
// });
// console.log(result);
//是否包含某个元素，返回true或者false
// console.log(arr.includes(3));    
// 数组内的每个元素替换，填充数组   会改变原数组
// arr.fill(7);
// // console.log(result);
// console.log(arr);






// 返回迭代器对象
let keys = arr.keys();   //获取数组index
let values = arr.values();
let entries = arr.entries();
// console.log(keys, values, entries);
// for (let key of keys) {
//     console.log(key);
//     console.log('------');
// };
// for (let value of values) {
//     console.log(value);
//     console.log('------');

// };
// for (let entry of entries) {
//     console.log(entry);
//     console.log('------');

// };

// keys, values, entries  当前是迭代器对象  想要遍历的话推荐用for  of
// console.log(keys.next());
// 遍历迭代器对象
// let result;
// while (!(result = keys.next()).done) {
//     console.log(result.value);
// };







// // 对字符串的遍历
// //对字符串进行裁切  
// let str = 'hello';
// let arr2 = str.split('');
// console.log(arr2);
// // for  of 遍历

// for (let key of str) {
//     console.log(key);
// };







