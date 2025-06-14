// Select all occurrences: Ctrl + Shift + L
//Select multiple(two) occurrences: Ctrl + D

// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(element);
}


for (let i = 0; i <= 10; i++) {
   //console.log(`outer loop : ${i}`);
   
    for (let j = 0; j < 8; j++) {
       
       // console.log(`inner  loop value: ${j} of outer loop ${i} `);
       // console.log(i + '*'+ j + '=' + (i*j));
        
    }
    
}

//array

// let myarray=["batman", "flash", "superman"];
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);  
// }


////////////// break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         break;
        
//     }
//     console.log(`value of i is: ${index}`);
// }


for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        continue
        
    }
    console.log(`value of i is: ${index}`);
    ;
    
}