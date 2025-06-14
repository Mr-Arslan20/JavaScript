const map= new Map()
map.set("IN", "INDIA");
map.set("usa", "america");
map.set("china", "china");

//    console.log(map);
for (const [key, value] of map)  //[key, value] =>destructuring of array
     {
     console.log(key, ":-", value);
     
}

const myobject={
    js:"javascript",
    cpp:"c++", 
    rb:"ruby",
    swift:"swift by apple"
}
//to make objects iteratve, for-in loop is used.

for (const key in myobject) {
    console.log(key);     /// keys aaaa jaye giii
 }

// ab object ko nikalne ka tarika ye ho ga. key-value pair aye ga
//map pr for-in nh lagaye gy
for (const key in myobject) {
   // console.log(`${key} shortcut for ${myobject[key]}`);
}


