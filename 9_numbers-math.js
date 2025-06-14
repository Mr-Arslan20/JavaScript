
/// 1. Number
/*
const score=400;
console.log(score);

const balance= new Number (100) ///we force to get a number 
console.log(balance);

console.log(balance.toString().length); ///converted from number to string. now have properties of string

///readable decimal values upto 2 places to get preciseable value (in e-commere website)
console.log(balance.toFixed(2));

let number = 12.346
//give precision of value upto no of digit you enter and return a string
console.log(number.toPrecision(3))

const hundreds=1000000
///add commas auto according to US standards
console.log(hundreds.toLocaleString())
// according to indian standards  
console.log(hundreds.toLocaleString('en-IN'))
*/
// 2.Maths
            //it comes in default in JS
console.log(Math)
/*
/// -ve to +ve values
console.log(Math.abs(-4));

// round up decimal to integars
console.log(Math.round(4.9));

// ceil function picks  upper value and floor pics lower value
console.log(Math.ceil(4.9));
console.log(Math.floor(3.9));

//square root and power
console.log(Math.sqrt(64));
console.log(Math.pow(2,3));

//find lowest and max value in the array
console.log(Math.min(3,5,4,-1));
console.log(Math.max(3,5,4,-1));
*/
/*
// mostly used and important.values b/w 0 and 1
console.log(Math.random());
//=> dice game need value in 1 and 6
console.log((Math.random()*10) + 1); //we add 1 so we get min value 1 not 0 as math.random can give 0.00098.to avaoid zero we add 

const min=10;
const max=20;
console.log(Math.floor(Math.random()* (max-min +1)) + min) //(max-min) krne se hamme range mil jate ha jo hamme chahiye values ki or (+min) kia taa k min value hamare given min k mutabiq aaye
*/
function getrandom(min,max)
{
    return Math.floor(Math.random()* (max-min +1)+ min);
}

console.log(getrandom(40,50));
