function test({ name, age = 13, ...a }) {   //解构的形式生成变量
    // 解构
    // let {name,age}=test({ name: 'zhangsan', age: 12 });
    // let name = obj.name;
    // let age = obj.age;
    console.log(name, age, a);
};
test({ name: 'zhangsan', age: 12, gender: '1' });




// 函数的数组解构
function aa([...b]) {
    console.log(b);
}
aa([1, 2, 3, 4, 5]);