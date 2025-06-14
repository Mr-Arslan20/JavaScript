// date is an object in JS

const mydate= new Date();
//console.log(mydate.toString());

//const createmydate = new Date(2022,0,8);   //jb array me likhty hain tu month "0" se start hota ha, jb "yy-mm-dd" likhty han tu 1 se start hota ha
/*
const createmydate= new Date("2023-01-22")
console.log(createmydate.toLocaleDateString());
console.log(createmydate.toDateString());
*/

//==>> time getting
// const createmydate= new Date("2023-01-22");
// let mytimestamp=Date.now(); //returns the no of milliseconds since january 1970.
// console.log(mytimestamp);
// console.log(createmydate.getTime()); //use to determine who booked room first in hotel or submitted quiz etc
// console.log(Math.floor(createmydate.getTime()));

let newdate= new Date();
console.log(newdate.getMonth()+1);   //to get exact month, user dont get confused


newdate.toLocaleString('default',{ 
    weekday:"long"
})





