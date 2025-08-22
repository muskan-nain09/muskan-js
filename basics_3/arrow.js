const user = {
    Name: "muskan",
    age : 21,

    wlcmMsg : function(){
        // console.log(`${this.Name}, Welcome back!`) // it represents the current context
        // console.log(this) // it will return the whole object even after updating new context  

    }
}
// console.log(user.wlcmMsg()) // ye undefined print krega end m output dene k baad kyunki isme koi return value nai h
// user.wlcmMsg()
// user.Name = "Tejas" // we updated new context ... 
// console.log(user.wlcmMsg())

// console.log(this) // yaha node m it returned empty parenthesis but when ran in window console this command will return "window keyword"

//in browser the global object is window object ******************************* IMPORTANT 

// function me(){
//    let user = "muskan"
//     console.log(this.user) // only objects k time hum this use kr skte h functions m we can't directly use this keyword
// }
// me()

// const me= () => { 
//     let user = "muskan"
//     console.log(this.user)
// }
// me() // still it will print undefined 

const me =(a,b) => { // explicit return in function are those where curly braces are used and we use return keyword
    return a+b
}
// console.log(me(3,4)) // method 1 for arrow function

// method 2 is: implicit return
const me1 = (a,b)  => ({username: "muskan"}) // or (a+b) parenthesis m bhi rkh skte ho  
// const me1 = (a,b) =>  a+b 
console.log(me1(3,4))