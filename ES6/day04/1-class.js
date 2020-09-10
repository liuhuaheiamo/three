// 创建一个类
class Person {
    // 静态属性  使用static修饰的是静态属性
    static atrr = 'hello';
    // 实例私有属性
    test = [];
    // 写一个构造器  默认有一个可以显示提供
    constructor(name, age) {
        // 在构造器里创建的属性是，实例的私有属性
        this.name = name;
        this.age = age;
    };
    // 实例方法
    sayName() {
        console.log(this.name);
    };
    // 静态方法
    static isPerson(obj) {
        return obj instanceof Person;
    };
};
// 静态属性
// Person.attr = 'hello';
let p = new Person('zhangsan', 12);
console.log(p);
p.sayName();
// 看一下p是不是person的实例
let result = Person.isPerson(p);
let result2 = Person.isPerson({});
// console.log(result);
// console.log(result2);
// console.log(p instanceof Object);
// 子类继承了父类，子类的实例是自己的实例。也是父类的实例
// console.log(Person.attr);
let p2 = new Person('lisi', 10);
p.test.push('tom');
console.log(p, p2);
console.log(p.sayName === p2.sayName);
console.log(p.test === p2.test);
