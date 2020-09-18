// 创建数组的两种基本方法
// 构造函数方法
// var arr = new Array(10);  //当数组中的值为一个number数组时，这时候的数值代表为数组的长度
// console.log(arr.length);
// 数组中可以放置任意的数据类型
// var arr = new Array(10, 11, 'hello');  //当数组中的值为number数组时，这时候的数值代表数组里面的元素
// console.log(arr);
// 字面量声明方法创建数组
// var arr = [1, 11, 22, 222];
// console.log(arr);
// 数组的方法
// var arr = [22, 555, 1, 4451, 11, 33, 55, 66, 77, 88, 99,];
// 数组的取值方法
// 可以通过索引index获取，也可以说是下标
// var result = arr[0];
// var result = arr[10];   //超出了数组长度取不到没有的值，返回一个undefined
// var result = arr[5] = 666;  //在数组的5号位置添加了一个元素，但是在四号位置没有，所以为空的，但是数组的长度也由原来的4变成了6
// console.log(result);
// console.log(arr);
// 数组的检测
// console.log(typeof arr);
// console.log(arr instanceof Array);  //这个方法只能够在同一个作用域下使用，如果有两个不同的全局执行环境，那结果就会不准确
// console.log(Array.isArray(arr));  //这个是新增的方法，就是为了防止上面的方法出问题
// 数组的序列化
// var result = arr.toString();   //会以逗号隔开元素
// var result1 = arr.join('||');    //括号里面的是指定分隔开的方式
// console.log(result);
// console.log(result1);
// 栈方法LIFO(last-in-first-out)
// arr.pop();   //移除数组最后一项，并且返回，且数组长度减一
// console.log(arr);
// console.log(arr.length);
// arr.push(666);  //在数组最后添加一项，并且返回，数组长度加一
// console.log(arr);
// console.log(arr.length);
// 队列方法 FIFO(first-in-first-out)
// arr.shift();   //移除数组中的第一项，并且放回  数组长度减一
// console.log(arr);
// console.log(arr.length);
// arr.unshift(555555);  //在数组的第一位置前面添加一项 ，并且放回  ，数组长度加一
// console.log(arr);
// console.log(arr.length);
// 排序 
// arr.reverse();    //这是倒序排序，在原来的数组顺序从后面开始排
// console.log(arr);
// function test(a, b) {
//     // a和b进行比较比如1和3，当1>3不成立的时候return 1 这时候位置没有对调，也就是前面的小于后面的数，升序排序
//     if (a > b) {
//         return -1
//     } else {
//         return 1
//     }
// };
// arr.sort(test); //调用函数test  这个方法必须传递一个参数
// console.log(arr);
// 截取方法
// 数组拼接
// var arr = [22, 555, 1, 4451, 11, 33, 55, 66, 77, 88, 99,];
// var arr1 = [666666, 222222, 4444445555, 8888888];
// var result = arr.concat(arr1);   //数组拼接方法，不会改变原数组，把拼接的数组添加到原数组的末尾
// console.log(arr);
// console.log(result);
// 数组切割
// var result = arr.slice(2);   // 单个参数时从2号位置开始切割，一直到数组的末尾，并且返回切割的元素
// console.log(result);
// var result1 = arr.slice(2, 5);  //两个参数的时候，也是第一个参数为开始位置，到第二个参数的前一个位置切割，就比如说从1号位置开始切割，到4号位置切割就停止了，5号位位置是末位置，不进行切割，这个方法不改变原数组
// console.log(result1);
// arr.splice(1, 3);    // 删除元素，有两个参数  一个是起始位置，也就是开始位置，一个是删除的项数  Yui改变原数组
// console.log(arr);

// arr.splice(1, 3, 55, 145);   //插入元素  有三个参数  第一个为开始插入的位置  第二个为删除的项数，  第三个为要插入的量也就是项数,比如谁插入1,2,3,4,5这五个元素   splice为slice的加强版，多了一个参数，不过如果要插入元素的话，第二个参数必须为0，也就是只是插入元素，而不会删除元素
// console.log(arr);

// arr.splice()    //修改/替换元素   也是有着三个参数  这个修改就是第二个参数不为零的时候。

var arr = [22, 555, 1, 4451, 11, 33, 55, 66, 77, 88, 99,];
var arr1 = [666666, 222222, 4444445555, 8888888];
// 索引方法
// var result = arr.indexOf(11, 5);   // 这个是默认从头往后找 可以设置两个项，第一个为想要·1查找的元素，第二个为开始查找的位置  ，查找到的话就返回该元素的索引，查不到就返回-1  不改变数组所以需要参数接收值
// console.log(result);

// var result = arr.lastIndexOf(66, 5);   //从尾部往前面找  ，其他的基本和indexOf一样
// console.log(result);


// 迭代方法
// every 的意思打给就是全部都要满足才会返回一个true如果有一个不满足的元素立即放弃寻找下一个元素，直接的返回一个false
// var result = arr.every(function (item, index, arr) {
//     return item > 2;
// });
// console.log(result);

//some的意思就是有一个满足条件就可以返回true 一个都不满足才返回false
// var result = arr.some(function (item) {
//     return item > 2
// });
// console.log(result);


//返回满足的元素，并且以数组展示
// var result = arr.filter(function (item) {
//     return item > 2
// });
// console.log(result);



//返回一个调用结果，并且调用结果会以数组展示
// var result = arr.map(function (item) {
//     return item * 2
// });
// console.log(result);



//遍历数组
var result = arr.forEach(function (item) {
    console.log(item);
});
