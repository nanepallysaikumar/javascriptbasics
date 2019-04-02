
// ........................Spread......................
let obj = {
    name: "sai",
    age: "kumar"
}

let newObj = {
    ...obj,
    gender: "male"
}

console.log(newObj); // mergin og two different objects in single object

let arr1 = [1,2,3,4];
let newarr = [...arr1,7,8]; // mergintwo different arrays

console.log(newarr);

//......................Rest...........

const filter = (...args) => {
return args.filter(el => el > 2);
}

console.log(filter(1,2,3,4,5));
