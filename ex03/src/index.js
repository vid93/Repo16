class Person {
    
    static display() {
        var message = console.log("Static method is invoked form Person class");
        return message;
    }
    show(){
        Person.display();
        
    }
}

var message = new Person();
message.show();
module.exports = Person;