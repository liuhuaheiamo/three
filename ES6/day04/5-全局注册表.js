

// 键值对方式   如果第一次for将symbol值放到全局注册表中，如果是第二次放从全局注册表中找key对应的symbol值。
let sy = Symbol.for('hello');    //存   会给定一个key值
let sy2 = Symbol.for('hello');   //取
console.log(sy === sy2);

let sy3 = Symbol('hello');    //不会在全局注册
let sy4 = Symbol('hello');

console.log(sy3 === sy4);