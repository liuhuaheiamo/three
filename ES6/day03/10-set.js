// 创建set集合 成员是唯一的 键值对key和value是一样的   引用数据类型
let set = new Set();
// console.log(set);
// 添加元素
set.add('hello');
set.add('world');   //只保留一个  成员唯一
set.add('world');
// 删除
// set.delete('hello');
// set.add('hello');

// console.log(set);
// // 判断有没有某个成员
// console.log(set.has('hello'));
// console.log(set.has('he'));
// //清空操作
// set.clear();
// console.log(set);
// console.log(set.size);


// 遍历
let keys = set.keys();
let valyes = set.values();
let entries = set.entries();
console.log(keys, valyes, entries);
// 遍历
// set.forEach((value) => {
//     console.log(value);
// });
// for (let key of keys) {
//     console.log(key);
// };
// set应用
// let set2 = new Set([2, 3, 4, 5, 2, 3, 4, 5]);  //有去重复的操作
// console.log(set2);



// 以前 遍历数组，新数组，从旧数组里获取每一个元素，如果新数组里没有就放进去，有就不放进去

let set2 = new Set([2, 3, 4, 5, 2, 3, 4, 5]);
let result = new Set(set2);
// 将set集合转成数组
console.log(result);
let arr2 = [...result]
console.log(arr2);
console.log([... new Set(set2)]);