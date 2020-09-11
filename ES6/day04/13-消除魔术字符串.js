let s = Symbol('消除魔术字符串');
let s2 = Symbol('消除魔术字符串');
let s3 = Symbol('消除魔术字符串');
let s4 = Symbol('消除魔术字符串');
// var i = 1;
// var i = 2;
// var i = 3;
// var i = 10;
let obj = {
    a: s,
    aa: s2,
    aaa: s3
};
function text(param) {
    switch (param) {
        //这是正常情况下的耦合  也就是魔术字符串
        // case 1:
        //     console.log('这是1');
        //     break;
        // case 2:
        //     console.log('这是2');
        //     break;
        // case 3:
        //     console.log('这是3');
        //     break;
        // default:
        //     console.log('结束');
        // 清除耦合
        case obj.a:
            console.log('这是1');
            break;
        case obj.aa:
            console.log('这是2');
            break;
        case obj.aaa:
            console.log('这是3');
            break;
        default:
            console.log('结束');

    };
};
text(obj.a);
// 封装一个函数
// function test() {
//     for (let i = 1; i < 10; i++) {
//         console.log(i);
//     }
// };
// test();