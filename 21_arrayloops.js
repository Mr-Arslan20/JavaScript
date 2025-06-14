// For-OF loop

// Array ha, us me se har object me se value nikalnii ha

// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);  
// }        /// OUTPUt
// 1, 2, 3, 4, 5 (seprate elements)

// const arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(arr);    
// }
            /// OUTPUt
    // [1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]


    // const greetings="hello world"
    // for (const element of greetings) {
    //     console.log(element);  
    // }
 
///=====>>> for-each loop

const coding=["cpp", "js","react", "python", "ruby"]

// coding.forEach( function (item){ 
//                 console.log(item);
                
// })

// coding.forEach((item)=>{
//         console.log(item);
        
// }) /// arrow function


// agr phle se function declare ha tu usko print krwana ha.
// function printme(item){
//         console.log(item);
        
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//         console.log(item, index, arr);
        
// }) 

// const mycoding=[
//         {
//                 language:"javascript",
//                 file:"js"
//         },

//         {
//                 language:"phyton",
//                 file:"py"
//         },

//         {
//                 language:"c++",
//                 file:"cpp"
//         }
// ]
// mycoding.forEach((item)=>{
// console.log(item.language);

// })



// var a=["ali", "jaisak", "malik"];
// a.forEach(function(value, index){
//         console.log(value, index);
        
// })


// Sample array of objects coming from a database
const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
    ];

users.forEach(function(user){
        console.log(`the name is ${user.name} and age is ${user.age}`);
        
})