class Pets {
    constructor(name, legs){
        this.name = name;
        this.legs = legs;
    }
    walk(){
        var numOfLegs = this.name + " is walking on " + this.legs + " legs";
        return numOfLegs ;
    };
};
class Dog extends Pets {
    constructor(name, legs){
        super(name, legs)

    }

    bark(){
        var dogSay = this.name + " says WUF-WUF";
        return dogSay;
    };
};

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}