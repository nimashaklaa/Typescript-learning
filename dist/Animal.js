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
function getdata(s) {
    if (s) {
        if (typeof s === "object") {
            for (const sb of s) {
                console.log(sb);
            }
        }
        else if (typeof s === 'string') {
            console.log(s);
        }
    }
    else {
        console.log('You have enterd a null value');
    }
}
getdata(["hi", "his"]);
//# sourceMappingURL=Animal.js.map