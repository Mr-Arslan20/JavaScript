//primitive data types
//  => 7 types :String, number, boolean , null, undefined, symbol, bigInt 
// always call by value, chnages in copy 

//symbol make it unique
// const id= Symbol('123')
// const anotherid= Symbol("123")
// console.log(id===anotherid)  //reult=false;

// Refrence type/ non primitive 
// Arrays, objects , functions
const heroes = [ " superman" , " spiderman " , "batman"]

//=> objects are in {} and key value pair
let mydata = {
    name : "ali",
    age :23

}

//==> ( ) are used for function
const myfunction = function ()
{
console.log("hello world")
}
console.log(typeof myfunction );

