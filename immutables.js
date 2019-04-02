const object = {
    name :"saikumar"
}

// this way we can create a copy of object value rather its reference type

const updatedObject = {
    ...object,
    gender: "male",
}

// though we are updating the object it is not updating as it is creating a seperate copy
updatedObject.name = "kiran";


console.log("oldobject",object);
console.log("updated object",updatedObject);