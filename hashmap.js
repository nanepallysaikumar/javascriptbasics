// MAPS IN JAVASCRIPT which resembles like objects but foreach works

const question = new Map();

// we can set key value pair
question.set('question','who is the prime minister of India');
question.set(1,'ES5');
question.set(2,'es6');
question.set(3,'es6');
question.set(4,'es7');

// we can get key value

console.log(question.get(1));

// we can check wheather the property exists in map or not?

if(question.has(4)) {
    console.log('we are inside the es7')
}

// maps can be foreach
question.forEach((value,key) => {
    console.log(`This is ${key} and set to ${value}`);
})

console.log(question);