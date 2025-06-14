 /*
const myarr = [1,2,3,4,5]; 
///JS arrays are always resizeable.
// JS Array coy operations creates shallow copy(shares same refrence point).


 ///  => Methods of Array

 myarr.push(6);          //just add value
 myarr.pop();            // just simply remove the last element.
 console.log(myarr);

myarr.unshift(9);       //adds at the start of the array.
myarr.shift()           //removes the first value
 
console.log(myarr.includes(9));          //ask question wether it includes or not.
console.log(myarr.indexOf(5));


const newarr = myarr.join();  ///changes the datatype
console.log(myarr);
console.log(newarr);
console.log( typeof newarr);

// => slice and splice
console.log("A",myarr);

const myn1 = myarr.slice(1,3);   //starting from index 1 and dont include 3
console.log(myn1);
console.log("B" , myarr);

const myn2 = myarr.splice(1,3); //last range include 
console.log(myn2);
console.log("C" , myarr);    ///original array ko manupluate kiaa ha.

*/
                      ///  ==> Array Lecture 2.
const marvel =[ "thor" , "iron-man" ,"spiderman"]
const DC = ["batman", " flash" , " batman"]

/*
marvel.push(DC);    // ye phle array k andar dosrii array  ko as a 4th element daaly gaaa not as a whole array
console.log(marvel);


const allheroes=marvel.concat(DC) //concat function store the concatenated string in new variable.returns new array
console.log(allheroes);
*/

// ===>> Spread function ( ye array me majood values ko spread kr deta ha, jese k esse concat kia ho)
 const newhero = [...DC,...marvel]
 console.log(newhero);
 
 ///===> flat jo ha wo array k ander jo arrays hoty hain unko khatam kr deta ha
 const complexarray = [1,2,3,[4,5],6,[7,8,[9,10]]];
 const simpleone=complexarray.flat(Infinity);//provide number to how much depth be solved. just simply write infinity
 console.log(simpleone);
 

 //other operations. (IMPORTANT)
console.log(Array.isArray("Arslan"));
console.log(Array.from("Arslan"));  //converts string into array
console.log(Array.from({name:"Arslan"}));  //converts object into array.you have to tell that form array of an values or of keys

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));  //converts into array

 
