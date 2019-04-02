function Person(name) {
    this.name = name;
}

// one of using this
Person.prototype.myFriends = function(frinds) {
    var self = this;
    var arr =  frinds.map(function(el) {
        return self.name + 'is frineds with' + el;
    });

    //console.log(arr);
}

var friends = ['sai','anirudh','puppy'];

var ss = new Person('john').myFriends(friends);

// other way of using this
Person.prototype.myFriends = function(frinds) {
    var arr =  frinds.map(function(el) {
        return this.name + 'is frineds with' + el;
    }.bind(this));

    //console.log(arr);
}

var friends = ['sai','anirudh','puppy'];

var ss = new Person('john').myFriends(friends);

// using es6 arrow operator
Person.prototype.myFriends6 = function(frinds) {
    var arr =  frinds.map((el) => {
        return this.name + 'is frineds with' + el;
    });

    console.log(arr);
}

var friends = ['sai','anirudh','puppy'];

var ss = new Person('john').myFriends6(friends);
