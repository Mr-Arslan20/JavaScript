
// reduce the elements of an array to a single value
const prices=[10,5,15,20];
// const totalis=prices.reduce(function (accumalor, currentval){
//     return accumalor + currentval;
// }, 0) // acuumalotor value

const totalis=prices.reduce((accumalor, next)=> accumalor+next, 0)
console.log(totalis);

const items = [
    { item: "Laptop", price: 1200 },
    { item: "Smartphone", price: 800 },
    { item: "Headphones", price: 150 },
    { item: "Keyboard", price: 100 },
    { item: "Mouse", price: 50 },
    { item: "Monitor", price: 300 },
    { item: "Printer", price: 200 },
    { item: "Desk Chair", price: 250 },
    { item: "External Hard Drive", price: 120 },
    { item: "Gaming Console", price: 500 }
];

const totals=items.reduce((acc,obj)=>acc+obj.price,0)

console.log(totals);
