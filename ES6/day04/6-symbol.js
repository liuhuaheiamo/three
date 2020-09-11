let s = Symbol('描述');    //参数是描述
let s2 = Symbol.for('描述');    //参数是key
// Symbol.keyFor(s)可以检测s这个symbol值是否在全局注册过，返回key或者undefined
let result = Symbol.keyFor(s);
let result2 = Symbol.keyFor(s2);
console.log(result);
console.log(result2);




// 通过注册的sy值，找到该sy值对应的key，在通过key找到sy值。
let key = Symbol.keyFor(s2);
let result3 = Symbol.for(key);
console.log(s2 === result3);