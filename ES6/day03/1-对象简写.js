let name = 'zhangsan';
let age = 12;
let obj = {
    // 属性简写
    name,
    age,
    // sayName:function(){}
    // sayName() {
    //     console.log(this.name)
    // }
    // 函数简写  这里的this使用的是外部this 箭头函数没有this
    // sayName: () => {
    //     console.log(this);
    // }
    // sayName() {
    //     // this-- > obj
    //     return () => {
    //         console.log(this);
    //     }
    // }
    sayName
};
let sayName = () => {
    // this---->{}
    console.log(this);
};
// sayName();
obj.sayName();
// obj.sayName()(); //运行内部的return
// console.log(this);
// // 解构
// let { name: a, age: b } = { name, age };