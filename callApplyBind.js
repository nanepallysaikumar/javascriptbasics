//call apply bind

//Usage - the main use of call apply bind is for accessing the objects method for another method
//Can also be called as method borrowing
var john = {
    name: "john",
    age: 25,
    job: "teacher",
    description: function(sport,type) {
        if(sport === 'cricket') {
            console.log(this.name,"likes",sport,"which is",type);
        }
        else if(sport === 'chess') {
            console.log(this.name,"likes",sport,"which is",type);
        }
    }
}

var shyam = {
    name: "shyam",
    age: 25,
    job: "software"
}

john.description("cricket","external");
john.description("chess","internal");

//call fucntion - usage
john.description.call(shyam,"cricket","external");

//apply function -- usage - It accepts the function arguments in thr form of array.
john.description.apply(shyam,["cricket","external"]);

//bind function -- usage - bind function return the function 
var johnHobby = john.description.bind(shyam);
johnHobby("cricket","external");


