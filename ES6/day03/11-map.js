let obj = {
    name: 'zhnagsan',
    age: 12
};
let arr = Object.entries(obj);
console.log(arr);
let map = new Map(arr);
console.log(map);
// 添加元素
map.set('1', '2');
map.set('1', '3');  //覆盖
map.delete('1')   //通过key 删除
console.log(map);
// 通过key获取value
console.log(map.get('name'));
// 清空
// map.clear();
// 遍历
let keys = map.keys();
let values = map.values();
let entries = map.entries();
console.log(keys, values, entries);

map.forEach((value, key) => {     //值到key的对应
    console.log(value, key);
});




