
class Human {
    constructor() {
        this.gender = "male";
    }

    getGender() {
        console.log("male");
    }
}


class Person extends Human {
    constructor(name) {
        super();
        this.name = name;
    }
  getAge() {
      console.log(this.name,this.gender);
  }
}


let person = new Person("sai");
person.getAge();
person.getGender();


class NextGenjs {
    gender = "male";

    getGender = () => {
        console.log(gender);
    }
}

let nextgen = new NextGenjs();
