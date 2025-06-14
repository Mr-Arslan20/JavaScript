//destructuring of an object
// jaha bhii {company} curly braces ho ga mean waha destructuring ki ja rhi ha
const course ={
    name:"JS hindi",
    price: "999",
    tutor: "hitesh"
}

// const{tutor}=course; //object kii value extract kr lae gy, oor aagy jb bhii use hona ho wo value use kr skty hain directly without (course.tutor) likhy

 //const {tutor: teacher}=course; //agr koi or name dena ho to is trah likhain
// console.log(teacher);

// console.log(tutor);


/// ====>> API

// JSON is basically an object without any name. es me key or value both "string " me hoti hain.Syntax is following
// {
//    " name":"JS hindi",
//     "price": "999",
//    " tutor": "hitesh"
// }



///==> practice object programs



//to check wether key exist or not
// const person={
//     name:"shani",
//     age:21,
//     isloggedin: true
// };
// // console.log("islogged" in person);  //in operator also check the inherited property
// console.log(person.hasOwnProperty("age")); //agr key exist krta ha tu true return krta ha. another method to check key exist or not



//prevent from modifying the object
// const person={
//     name:"shani",
//     age:21,
//     isloggedin: true
// }
// Object.freeze(person); //freeze method se object kii value change nh ho skti or na delete ho sktii ha
// person.name="hitesh";
// console.log(person);

// Object.seal(person); //seal method se object kii value change  ho skti, but new key add nh ho skti ha or na delete ho sktii ha
// person.name="hitesh";
// delete person.age; //not allowed
// console.log(person);

// Object.preventExtensions(person); //preventExtensions method allows update and deletion but not new properties
// person.name="hitesh";
// delete person.age;
// person.city="lahore"; //not allowed
// console.log(person);


///=>merge the obejcts
// const payment={
//     name:"shani jaisak",
//     amount: 500
// }
// const combine=Object.assign({},person,payment); //object.assign method se 2 objects ko merge kr skty hain
// console.log(combine);

// const combine2={...person,...payment}; //spread operator se bhi 2 objects ko merge kr skty hain
// console.log(combine2);

const person={
    name:"shani",
    age:21,
    isloggedin: true
}
delete person.age;
console.log(person);
