//creation pf promises

//promise apne ander ek call back leta ha
const promise1= new Promise(function(resolve,reject){
    //Do an async task,cryptography,network
    setTimeout(function(){
        console.log("async task 1");
        resolve();  //basically connect resolve with ".then" to cmplete the promise
    },1000)

}); 
promise1.then(function(){
    console.log("promise consumede..");
    
});   // .then ka direct relation resolve k sath ha pr es me hamme ek call back milta ha


//promise creation without storing it in the variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 completed..");
    
})


const promise3=new Promise(function(resolve,reject){
setTimeout(function() {
    //resolve k inside jo bhi parameter pass kro gy wo aagy ,then me mil jaye ga
    resolve({username: "shani",email:"shani@gmail.com"})
}, 1000);
})
promise3.then(function(user){
    console.log(user);   
})


// chaining= jo ooper wale .then se value return ho gii wo hii next wale .then function me jaye gii
const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=true;
        let error=false;
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else{
            reject("Error: Something is wrong")
        }
    },1000)
})
promise4.then(function(user){
    console.log(user);
    
    return user.username
})
.then((username)=>{
    console.log(username);
    

})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("finally promise is either resolved or rejected.");
})




const  promise5= new Promise(function(resolve,reject){
    let error=true;
        if(!error){
            resolve({username:"javascript",password:"12123"})
        }
        else{
            reject("Problem ha BOSS")
        }
    },1000);
    //async method ha mean to say k koii response aane wala ha
async function consumefunction5(){
    try{
   const response= await promise5;
   console.log(response);  }
   catch(error)
   {
    console.log(error);
   }
    
}
consumefunction5();




///  get all users from JSON library using Async-await
// async function getallusers(){
//     try{
//  const response=  await fetch('https://jsonplaceholder.typicode.com/users')//fetch ko bs ek URL chaiye hota ha

// //  console.log(response);
 
//  const data= await response.json(); // Q k json conversion bhii time leta ha tu hamme response.json ko bhi await karana pare ga
//  console.log(data);
// }
//  catch(error){
//     console.log("E:",error);
    
//  }
// }
// getallusers();




//Get all users using .then, .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data.name);
    
})

.catch((error)=>console.log(error))