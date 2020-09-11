let sy1 = Symbol('666');
let sy2 = Symbol('two');
let sy3 = Symbol('three');
let sy4 = Symbol('four');
let obj = {
    attr1: Symbol('666'),
    attr2: Symbol('two'),
    attr3: Symbol('three'),
    attr4: Symbol('four')
};


function test(param) {
    switch (param) {
        case obj.attr1:
            console.log('这是one');
            break;
        case obj.attr2:
            console.log('这是two');
            break;
        case obj.attr3:
            console.log('这是three');
            break;
        default:
            console.log('这是默认操作');

    };
};
test(obj.attr1);
