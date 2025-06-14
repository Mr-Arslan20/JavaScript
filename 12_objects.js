//singleton (object created through constructor)
/*
//Object literals
const mysym= Symbol("key1")
const user = {
    name:"shani" ,
    "name full": " malick arslan" ,  //es value ko bs [] method se access kr skty hain
    [mysym]:"key1" ,
    age:18 ,
    email: "shani@gmail.com" ,
    isloggedin: false ,
    lastloggindays : [" monday " , "saturday"]
}

//acces the values
console.log(user.name);
console.log(user["name full"])
console.log(user[mysym])

//kisi ko replace krna ha tu bs = k sign se kr daen
user.email="malikarslan112gmail.com"
console.log(user.email)

///es se koiii object kiii value change nh kr sky ga
// Object.freeze(user)
// user.name="Mr Arslan"
// console.log(user)

//function in JS treated as simple varible
user.greetings = function(){
    console.log("AoA");
    
}
console.log(user.greetings());
console.log(user.greetings);

user.greetings2= function ()
{
    console.log(`hello, users ${this.name} `);

    
}
console.log(user.greetings2());
*/
 /// => part 2
 /// objects with the help of the constructor (singleton)

//  const  tinder = new object ()   //singleton object
const tinder = {}
 tinder.id = "123abc"
 tinder.name= "shanii"
 tinder.loggedin = false
 
// console.log(tinder);

// const regularuser =
//  {
//     email :" shani@gmail.com" ,
//     fullname: {
//         userfullname:{
//             firstname: " mr",
//             lastname: " arslan"
//         }
//     }

// }
// console.log(regularuser.fullname.userfullname.firstname);

//==> combination of objects

const obj1 = {1 : "a" , 2: "b"}
const obj2 = {3 : "a" , 4: "b"}


//const obj3 = Object.assign ({}, obj1 ,obj2)       [km hi use ho ga ye method]
const obj3 = {...obj1, ...obj2}
console.log(obj3);

///  ==> when values come from database ,it comes in the form of array of objects

const users =[
    {
        id : 1 , 
        email : "user@gmail.com"
    },
    {

    },
    {

    }

]
users[1].email
console.log(tinder);
/// ==>> very very important
console.log(Object.keys(tinder));      
console.log(Object.values(tinder));
console.log(Object.entries(tinder)); //har key value ko array me bna deya jata haaa.

//to ask from object wether it has the certain property or not
console.log(tinder.hasOwnProperty('loggedin'));



 



