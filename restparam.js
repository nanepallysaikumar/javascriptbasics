// rest params in es5

function getFullAge5() {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments); // for converting to array
    console.log(args);
}

// getFullAge5(1900,1991,1992);

// rest params in es6 and rest parameter should be always last

function getFullAge6(limit,...years) {
    console.log(age);
    years.map(yrs => console.log(2018 - yrs > limit));
}


getFullAge6(18,1900,1991,2000);