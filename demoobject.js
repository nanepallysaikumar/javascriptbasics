
//constructor function, making javascript object oriented old way of creating classes

var Person = function(fname, lname,age) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    }

Person.prototype = function calculateAge() {
     console.log(2018);
}
var john = new Person("sai","kumar",26);

console.log(john);

//difference between Object.create & creating object using new operator

const fun = function() {
    this.greet = 'my greetings';
  }
  
  fun.prototype.greeting = function() {
    console.log('ssai is greeting',this.greet);
  }
  
  const obj1 = new fun();
  obj1.greeting(); // ssai is greeting my greetings
  
  const obj2 = Object.create(fun.prototype); //ssai is greeting undefined
  obj2.greeting();

//   This is because when we created baz object we didn’t call Foo constructor 
//   function where the greet variable was declared. 
//   So greet varaible inside baz.greeting method remains undefined.