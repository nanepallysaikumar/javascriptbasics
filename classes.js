// es5 way of creating clases - function constructer

var Person5 = function(fName,lName,year) {
    this.fName = fName;
    this.lName = lName;
    this.year = year;
}

Person5.prototype.getAge = function() {
    var age = 2018 - this.year;
    return age;
}

var john = new Person5("sai","kumar",1994);

var age = john.getAge();
// console.log(age);

// console.log(john);

//es6 way of creating clases

class Person6 {
    constructor(fName,lName,year) {
        this.fName = fName;
        this.lName = lName;
        this.year = year;
    }

    getAge() {
        let age = 2018 - this.year;
        return age;
    }

    //static methods

    static greeting() {
        console.log('i am a static class');
    }
}


var puppy = new Person5("sai","kumar",1994);

Person6.greeting();

const puppyage = puppy.getAge();

console.log(puppyage);

console.log(puppy);

// Inheritance in es5

var Person5 = function(fName,lName,year) {
    this.fName = fName;
    this.lName = lName;
    this.year = year;
}

Person5.prototype.getAge = function() {
    var age = 2018 - this.year;
    console.log(age);
    return age;
}

var Athelete5 = function(fName,lName,year,job,olympicmedals) {
    Person5.call(this,fName,lName,year);
    this.job = job;
    this.olympicmedals = olympicmedals;
}

// this will combine both the function constructors - it means
// athelete class inherits person class
Athelete5.prototype = Object.create(Person5.prototype);

var johnAthelete5 = new Athelete5("sai","kumar",1994,"swimmer",5); 

//adding prototype method only for Athelete function constructor .this will not
// inherit for person constructor
Athelete5.prototype.getMedals = function() {
    this.olympicmedals++;

}

johnAthelete5.getAge();
console.log(johnAthelete5);


// es6 inheritance in clsses

class Person7 {
    constructor(fName,lName,year) {
        this.fName = fName;
        this.lName = lName;
        this.year = year;
    }

    getAge() {
        let age = 2018 - this.year;
        return age;
    }
}

class Athelete6 extends Person7 {
    constructor(fName,lName,year,job,olympicmedals) {
// super is used for inheritance of patents class parameters
        super(fName,lName,year);
        this.job = job;
        this.olympicmedals = olympicmedals;
    }

    getMedals() {
        this.olympicmedals++;
    }
 }

 const johnAthelete = new Athelete6("sai","kumar",1994,"swimmer",5);

 console.log("es6 john athelts", johnAthelete);