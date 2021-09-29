class Person {
    constructor(name, email, age){
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getPerson(){
        let personalInfo = {
            Name : this._name,
            email : this._email,
            age : this._age        
        }
        return personalInfo;
    }
}


module.exports = Person;