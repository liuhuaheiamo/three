class Animal {
    static animalAttr = 'animal的静态属性'
    static animalMethod() {
        console.log('Animal的静态方法');
    };
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    };
    sayName() {
        console.log('Aniaml的实例方法', this.name);
    };

};