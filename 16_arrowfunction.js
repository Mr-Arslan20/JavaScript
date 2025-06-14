// this refers to current context.context means value


const user={
   name:"hitesh" ,
   price:999,
     
   welcomemessage:function(){
        console.log(`${this.name} , welcome to website`);
        console.log(this);
        
   }
}
// user.welcomemessage(); //hitesh , welcome to website
// user.name="shani";
// user.welcomemessage(); //shani , welcome to website


//==> important
//console.log(this); //window object in browser,node enviroment in coding enviroment

//this is not allowed in  function
// function chai(){
//    let username="saad"
//     console.log(this.username);
// }
// chai(); //undefined


//arrow function
const chai = ()=>{
    let username="saad"
     console.log(this.username);
}
chai(); //undefined


// ()=>{} //arrow function syntax
// const addtwo=(a , b) =>{
//     return a+b;    ///agr {} use kr rhy hain tu return keyword use krna zaroori ha
// }

//implicent return
//const addtwo=(num1, num2)=>num1+num2
//const addtwo=(num1, num2)=>(num1+num2); //agr () usekr rhy tu return keyword use nh krna zaroori ha
//return object
 const addtwo=(num1, num2)=>({name:"shani"}); //object
console.log(addtwo(2,3)); //5

////// =====>>>>>>>>>>>>>> IIFE (immediately invoked function expression)

//jb bhi function likhaa, ussi waqt execute karana ha.

//simple function
// function chai(){
//      console.log("DB connected");
     
// }
// chai(); //DB connected

// function chai(){
//      console.log("DB connected");
     
// IIFI syntax is ()()

//global scope k pollution se bachny k liye IIFE use hota ha
(function chai(){
     //named IIFE
     console.log("DB connected");
     
})();       // semi colon must to use 2 iife toegether

//arrow function
// (()=> {
//      console.log("DB connected two");
     
// })()

//passing arguments
((name)=> {
     console.log(`DB connected two ${name}`);
     
})("Mr. Arslan")