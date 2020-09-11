class Animal {
    constructor(name) {
        this.name = name;
    };
    sayName() {
        console.log(this.name);
    };
};

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
};