//const obj = new Object() // singleton object 
const obj = {} // non singleton object 

const u = {
    age : 31,
    fullname: {    // objects k andr objects 
        username:{
            firstname: "muskan",
            lastname: "nain"
        }  
    }
}

const u2 ={}

// console.log(u.fullname.username.firstname) // nested objects ko access krne ka tarika 
// console.log(u2.fullname?.username.firstname) //  ? isliye lagta h taaki check kiya jaaye ki if fullname do exist in that object or not .. agar nahi to undefined return krdega despite of showing error
// console.log(obj) // both ways same result hi print hota h 

const a = {A:1, B:2}
const b = {C:3, D:4}

const all = Object.assign({},a,b) // or const all = {...a, ...b }  bhi kr skte h like arrays
// // parenthtesis maintains clarity and reduce code complexity and make sure that whole object creation is a single program (#grouping)
// console.log(all)

const m = {
    Name: "muskan",
    age : 21,
    email: "muskan@google.com"
}

// console.log(Object.keys(m)) // access all the keys 
// console.log(Object.values(m)) // access all the values
// console.log(Object.entries(m)) //  make array of key value pairs 

// console.log(m.hasOwnProperty("age")) // returns true or false for if this is present in object or not 

// *********************** ARRAY OF OBJECTS REPRESENTED BELOW *************************************** 
// const n = [
//     {
//         id : 1,
//         Naaam: "muskan"
//     },
//     {
//         id : 8,
//         age :31
//     }
// ]

const course = {
    Name1 : "JS",
    Id: 2311234
}

const {Name1} = course // more clean way to access something from object especially if there are more and more params present   
const {Name1: CourseName} = course // Name1 ko aap rename kr skte h aise and rename ko hi print statement m daalenge to same output print hoga
console.log(Name1)
console.log(CourseName)