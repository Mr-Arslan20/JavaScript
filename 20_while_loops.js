/// while loop

// let index=0;
// while (index<=10) {
//     console.log(`value of index is ${index}`);
//     index=index+2;
// }


let myarr=["ali", "hassan", "bilal"];
let arr=0;
while (arr<myarr.length) {
    console.log(`the array is ${myarr[arr]}`);
    arr= arr+1; 
}



//////// DO-while loop
// first execution then condition check
let score =1;
//let score=11;  //output=11;
do {
    console.log(`score is ${score}`);
    score++;
    
} while (score<=10);