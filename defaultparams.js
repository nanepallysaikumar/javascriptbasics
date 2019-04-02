// default paramseters in es5

function Person(fName,lName,yearOfBirth,nationality) {
    yearOfBirth === undefined ? yearOfBirth = '1990' : yearOfBirth = yearOfBirth;
    nationality === undefined ? nationality = 'chinees' : nationality = nationality;
    this.fName = fName;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// this doesnt requires default parameters// 
var john = new Person('sai','kumar','1993','Indian');

var puppy = new Person('puppy','chitti');

console.log(john);
console.log(puppy);

// default parameters in es6


function Person6(fName,lName,yearOfBirth = '1990',nationality = '2006') {
    this.fName = fName;
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

// this doesnt requires default parameters// 
var john = new Person6('sai','kumar','1993','Indian');

var puppy = new Person6('puppy','chitti');

console.log(john);
console.log(puppy);
