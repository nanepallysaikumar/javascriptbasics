 
 // es5 - using apply
 
 function addElements(one,two,three) {
     return one + two + three;
 }

 let elements = [1,2,3];

 let Sum = addElements.apply(null,elements);

 console.log(Sum);


 // es6 - spread operator

 let sum6 = addElements(...elements);

 console.log(sum6);

 // merging two different arrays in single array

 let  family1 = ['sai','puppy','tom'];
 let family2 = ['chitti','potti'];

 let jointFamily = [...family1,...family2];

 console.log(jointFamily);

 // merging two different objects into single object

 let obj1 = {
     fName: "sai",
     lNmae: "kumar"
 }

 let obj2 = {
     age: "26",
     gender: "male"
 }

 let mergeObjects = {...obj1, ...obj2}
 console.log(mergeObjects);


