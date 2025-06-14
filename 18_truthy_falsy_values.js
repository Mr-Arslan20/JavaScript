// const useremail=" ali@gmail.com";
// if(useremail){
//     console.log("got an email");
    
// }
// else{
//     console.log("dont have an email");   
// }

   // ===>>> Falsy values
            // false,0, -0, empty string, bigint 0n, null, undefined, NaN

    // ==>> Truthy value
            // " 0 " , "false", " (space add ho string me tu truth ho ga) ", [], {}, function(){}

const emptyobj= {}
if (Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}  


////=====>>>>> Nullish coalescing Operator (??) : null && undefined
let val1;
// val1=5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 10
// val1=null ?? 10 ??20    // null k baad jo phle value aaye gi wo assign ho gii

// console.log(val1);




/////====>>>>>> Ternairy Operator >>>>>>>>>>>>>>>>>>>>

// condition ? true : false

const icetea=100;
icetea>=100 ? console.log("icetea is available") : console.log("icetea is not available");

