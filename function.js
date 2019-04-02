
// accepting function as arguments

var year = [1900,1991,1993,1994];

function calage(years, fn) {
    var calages = [];
    years.forEach((element,index) => {
        calages.push(fn(element));
    });
    return calages;
}

 function getage(element) {
    return 2018 - element;
}

var getages = calage(year,getage);


console.log(getages);

//functions returning functions.

function interviewquestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log("hello you opted for designer position",name);
        }
    }
    else if(job === 'teacher') {
        return function(name) {
            console.log("you opted for teacher position",name);
        }
    }
    else {
        return function(name) {
            console.log(name,"you are idiot");
        }
    }
}

var jobOption = interviewquestion("designer");
jobOption("saikumar");

//other way of calling fucntion

interviewquestion("teacher")("kumar");


//imediately invoked function ----- for data privacy

(function (name) {
    var score = Math.random() * 10;
    console.log(name,"your score is",score > 5);
})("saikumar");




































