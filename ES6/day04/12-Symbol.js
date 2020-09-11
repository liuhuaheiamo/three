let s = Symbol('这里放的是描述，不是值');
console.log(typeof s);


let obj = {};
let a = obj[s] = 'hello world'
console.log(a);