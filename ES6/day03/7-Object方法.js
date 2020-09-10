let obj = {
    name: 'zhnagsan',
    age: 12
};
// 遍历对象
// 快速获取方式  获取所有属性名组成的数组
let keys = Object.keys(obj);
// 获取所有属性值组成的数组
let values = Object.values(obj);
// 获取所有键值对组成的数组
let entries = Object.entries(obj);
console.log(keys, values, entries);



// 遍历
keys.forEach((item) => {
    console.log(item, obj[item]);
});
entries.forEach((item) => {
    console.log(item[0], item[1]);
});
