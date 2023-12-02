"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance}meters`);
    }
}
class Dog extends Animal {
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`Woof! Woof! ${this.name}is a ${this.breed}`);
    }
}
let dog = new Dog("Rex", "Gold Retriver");
dog.bark();
dog.move(10);
//# sourceMappingURL=Animal.js.map