// function add(a,b){ // here a and b are parameters 
//     console.log(a+b)
// }
// var res  = add(4,5) // arguments
// console.log(res)           ///// yaha result undefined aaega kyunki console n sirf print kiya naaki res m store kiya


// function add(a,b){ // here a and b are parameters  
//     let result = a+b  // # mthod 1
//     return result

//    //  return a+b // #method 2
// }

// var res = add(4,5)
// console.log("Result is : ", res)


// function login(username){
//     if (username === undefined){  //  or u can write if(!username)
//         console.log("Please enter the valid name: ")
//         return
//     }
//     return `${username} - Welcome Back! `
// }
// console.log(login("Muskan"))
// console.log(login()) // agar hum isko empty chode it will return -- undefined - Welcome Back!

// function Cartadd(a,b,...n){ // arrays m ise spread kehte h yaha functions m rest 
//     return n

// }
// console.log(Cartadd(2000,2000,30000,100)) // array will be created even if u declared one variable only .. output iska akhri k do number aaenge kyunki pehle do are assigned to a and b


// const Obj = {
//     username : "muskan",
//     age: 21
// }
// function addUser(a){
//     return `name of person is: ${a.username} and age is ${a.age}`
// }

// console.log(addUser(Obj))

// also addUser({ // not imp ki hum pehle object banaye hum direct bhi pass kr skte h 
//username : "muskan,
// age : 21"})

const arr = [200,300,400]

function Myarray(a){
    return a[1]
}
console.log(Myarray(arr))
// console.log(Myarray([200,300,400])) direct bi pass kr skte ho objects ki trh ek hi baat h 