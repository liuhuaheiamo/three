class Person {
    static num = 100;
    static number() {
        return this.num;
    };
};
// console.log(num);
console.log(Person.num);    //通过构造函数调用静态属性
console.log(Person.number());     //通过构造函数调用静态方法