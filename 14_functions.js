
function saymyname(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("i");
    
}
// saymyname();

// function addnumber(number1, number2) //parameters
// {
//     console.log(number1+number2);
    
// }
// const result=addnumber(2,3); //arguments
//  console.log(result);  //undefined




function addnumber(number1, number2) //parameters
{
   //==>method 1
    // let result=number1+number2;
    // return result;
    

    //==>method 2
    return number1+number2;
}
 const result=addnumber(2,3); //arguments
//  console.log(result);


function loginmessage(username){
            return`${username} is logged in`; 
}
console.log(loginmessage("shani"));


//jb apko na pata ho kitne arguments aane ho,tu ap spread operator use kr skte ho. spread operator ko rest operator bhi khty hain
function calculateprice(...num1){
    return num1;
}
// console.log(calculateprice(2,3,4,5,6,7,8,9,10));

const username={
    name:"ali",
    price:100,
    city:"lahore"
}
function handleobject(anyobject){
    console.log(`${anyobject.name} is from ${anyobject.city} and he paid ${anyobject.price} for the product`);
    
}
handleobject(username);

const myarray=[300,400,500,600];
function returnsecondvalue(array){
    return array[2];
}
console.log(returnsecondvalue(myarray));
console.log(returnsecondvalue([400,800,600]));



