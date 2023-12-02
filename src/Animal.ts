class Animal{
    name:String;

    constructor(name:String){
        this.name=name;
    }

    move(distance:number){
        console.log(`${this.name} moved ${distance}meters`)
    }

}

class Dog extends Animal{
    breed:String;

    constructor(breed:String,name:String){
        super(name);
        this.breed=breed;
    }
    bark(){
        console.log(`Woof! Woof! ${this.name}is a ${this.breed}`)
    }
}

let dog =new Dog("Rex","Gold Retriver")
dog.bark();
dog.move(10);