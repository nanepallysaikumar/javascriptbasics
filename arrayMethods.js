var array = [12,3,19,54];
let elements = [];
elements.push(array.findIndex((el) => {
    return el > 18
}));

console.log(elements);

// find returns elements that satisfy the condition

