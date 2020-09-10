// 原型方法
let obj = {
    name: '',
    age: 12
};
console.log(obj.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

// 设置obj的原型对象
let obj2 = {
    test() { }

};
// 将obj2设置为obj的原型对象
Object.setPrototypeOf(obj, obj2);
console.log(obj.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));