//destructuring in function


//destructuring 

const sample = ({fname,lname}) => {
    console.log(fname,lname);
  }
  
  sample({
    fname: "sai",
    lname: "kumar"
  });
  
// destructuring of array

var array = ["sai","kumar"];

const [fname, lname] = array;

console.log(fname);
console.log(lname);

// destructuring of objects

var object = {
    firstName: "saikumar",
    lastname: "nanepally"
}

const {firstName: a,lastname: b} = object;


console.log(a);
console.log(b);

// small application for destructering

function ObjectDestuctering(year) {
    const age = 2016 - year;

    return [age, 65-age];
}

var [age, retirement] = ObjectDestuctering(1993);

console.log(age,retirement);

