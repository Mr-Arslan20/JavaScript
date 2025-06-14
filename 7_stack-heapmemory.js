// 2 type of memory
// => stack memory (use in primitive datatype)
            // gives you a copy of the  object defined.       
// => heap memory (use in non-primitive datatype)
            // gives you refrence, chnage in original

let myyoutubename = " chai or code"
let anothername= myyoutubename
anothername= "apna college"
console.log(anothername);
console.log(myyoutubename);

let topperone = " Saad " 
let toppertwo = topperone
toppertwo= " zia"
console.log(topperone);
console.log(toppertwo);




            // gives you a reference of the object defined.
let userone = {
    email: " malikarslan2112@gmail.com" ,
    account: "ubl"
}
let usertwo = userone
 usertwo.email= " shanimalik@gmail.com"
 console.log(userone.email)
 console.log(usertwo.email);
 