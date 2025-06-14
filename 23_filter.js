
const mynums=[1,2,3,4,5,6,7,8,9,10];
// filter value return krta haa jb k for each loop koii value nh return krta
// const newnums=mynums.filter((num)=>num>4);
// const newnums=mynums.filter((num)=>{
//    return  num>4   // jb {} lagaty han tu new scope start ho jata ha, tb apko return likhna prta ha
// });
// console.log(mynums);

//yhii kaam agr for-each loop se kryy
// const newnumbs=[];
// mynums.forEach((numb)=>{
//     if (numb>4) {
//         newnumbs.push(numb);
        
//     }
// })

// console.log(newnumbs);


/// Filter (ek value khud hi return kr deta ha). Map bhi filter ki tarah value return krta ha
/*
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Coming-of-Age" },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Science Fiction" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" }
];

const userbooks=books.filter((bk)=>{
 //   return bk.author==='Leo Tolstoy'
    return bk.year>=1950
 })

console.log(userbooks);
*/



/*
let ary=[{
    fname:"malick", lname:"arslan"
},
{
    fname:"shani", lname:"jaisak"
},
{
    fname:"hitesh", lname:"chaudhary"
},
]
let result=ary.map((name)=>{
    return name.fname;

})
console.log(result);
*/
/// chaining ==>> jb 2 or 3 methods akhaty use ho
const mynumber=[1,2,3,4,5,6,7,8,9,10];
const newnu =mynumber.map((no)=>no*100)
                    .map((no)=>no-2)
                    .filter((no)=>no>298)

console.log(newnu);

