
// node js模块的导出  遵循commonjs规范
let firstname = 'ren';
let lastname = 'terry';
// {}
// console.log(module.exports);
// console.log(exports);
// console.log(exports === module.exports);   //true

// 导出方法
// module.exports.firstname = firstname;
module.exports = {
    firstname: firstname,
    lastname: lastname
};
