// if 

if(true){
    //code will execute if condition is true
}

// = (assignment operator), == (comparison operator), === (strict comparison operator,also check datatype)

// const score=200;
// if(score>200){
//     const power="fly"; // power is block scope.if finished once executed it will not be available outside the block
//     console.log(`user power is : ${power}`);
    
// }
// console.log(`user power is : ${power}`); // power is not defined

// const balance =1000;
// if(balance>500) console.log("test");

// const balance=1000;
// if(balance<500){
//             console.log("balance is less than 500");          
// }
// else if(balance<750){
//     console.log("balance is greater than 750");
// }
// else{
//     console.log("balance is greater than 500 and  750");
// }

// const userloggedin=true;
// const debitcard=true;
// if(userloggedin && debitcard){
//     console.log("you can purchase");
// }

///===>>>>>>>> SWITCH CASE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

// switch (key) {  //key wo value jisse check krna haa.
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;
switch (month) {
    case 1: //jis bhii value se match krna ho usko 1 ki jagah likh du or match krwa lo
        console.log("January");
        
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        
        break;

    default:
        console.log("invalid month");
        break;
}