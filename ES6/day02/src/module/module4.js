// nodejs 模块导入
require('./module3');
let { firstname, lastname } = require('./module3');
console.log(firstname, lastname);
console.log(module.id);
console.log(module.filename);
console.log(module.loaded);
console.log(module.parent);
console.log(module.children);