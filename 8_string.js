 // => String catenation
const Name ="shani"
const repoCount = 50

// console.log(Name + repoCount)
//console.log(  `Hello..!! my name is ${Name} and my repo count is ${repoCount} `);
 ///===> Other Methods
const gamename = new String ("PUBG- NEW") //create object and give name in Constructor.
// console.log ( gamename [0]);  //=> key/value pair access
// console.log(gamename.__proto__); 
// console.log(gamename.length) ///length of string
// console.log(gamename.charAt(2))  ///knse nmbr pr knsa character ha...
// console.log(gamename.toUpperCase())
// console.log(gamename.toLowerCase())
// console.log(gamename.indexOf('U')); //knsa chracter knse index pr aa raha ha

const newString = gamename.substring(0 , 3); ///divide in 2 substring. give start nmbr and end nmbr
console.log(newString)  //substring dont include the end nmbr and -ve value

/// start from reverse if given negative values.
const anotherString = gamename.slice(0,-4)
console.log(anotherString)

const stringoneis = "     ali        "
console.log(stringoneis);
console.log(stringoneis.trim()); /// trims the empty spaces


const url = "https://shanimaik.com/hitesh%30chaudhary"
console.log(url.replace('%30','__')) ///replaces the character
 
///store in array (string to array)
console.log (gamename.split('-'))

const stringdemo= new String("  shani  ");
console.log(stringdemo);
console.log(stringdemo.trim());
console.log(stringdemo.length);
console.log(stringdemo.slice(0,5));





