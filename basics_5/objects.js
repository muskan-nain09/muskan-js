//objects ki iteration k liye we use for in loop
const obj = {
    Name:"muskan",
    age:21,
    email: "muskan@google.com"
}

for (const key in obj) {
    // console.log(`${key} is : ${obj[key]}`)     
}

// arrays k liye for in:

const arr=["m","u","s","k","a","n"]

for (const key in arr) {
   //console.log(arr[key]) // agar hum yaha pr sirf key ko print krvaye to no aaenge to means array ki keys is equal to index isliye objects invent hue the 
}

const map = new Map()
map.set("In","India")
map.set("UAE", "Dubai")
map.set("UK","London")

for (const key in map) { //maps are not iterable so iska koi bhi input nahi aaega
   console.log(key)
}

