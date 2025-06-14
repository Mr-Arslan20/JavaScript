//{ } is basically a scope .
/// scope inside if condition is block scope and outside is global scope.global scope kii value if condition kii block scope mei available milegi.lekin block scope kii value global scope mei available nahi milegi.



//Two chota ha wo apne bare yaanii One se maang skta hai lekin One bada hai wo Two se nahi maang skta q k unethical lgy ga. it means inner function can access thee outside function variables.
function one (){
    const username="hitesh"

    function two(){
        const website="youtube";
        console.log(username);

    }
    // console.log(website);
    // two();
    
}
// one();


///  Intresting example
console.log(addone(5));

function addone(num){
    return num+1;

}
// addone(5);


//jb hm function ki kisi variable me hold kr laen gy tu usko access nh kr paaye gy phleee jaese ooper kia ha, ye hosting concept ha.declaration se phle accesss nh kr skty
const addtwo=function(num){
    return num+2;
}
addtwo(5);