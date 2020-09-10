let { firstname, lastname } = require('./module5');
console.log(firstname, lastname);
setTimeout(() => {
    console.log(firstname, lastname);
}, 4000);