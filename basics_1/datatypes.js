"use strict"; // treat the whole js code as a newer version

// alert(3+3)  //  the problem is we are using node js and not browser so it won't print 6 as pop up message

// code readability should be high

// DATA TYPES -- 
// 1. Number = 2^53 is range
// 2 . boolean = true/false
// 3. bigInt = for larger integer
// 4. string = ""
// 5 . null =  standalone value and also a datatype  #khali value h 
// 6 . undefined
// 7 . symbol =  it is used for uniqueness

// object - null is object 

let age = 12
let state = null
let name; 

// console.log(typeof "muskan")
// console.log(typeof age)
// console.log(typeof undefined) // return undefined for undefined type
// console.log(typeof null)  // object return krta h null k type ka 

// **************************************** OPERATIONS ************************************ 

let value= 3
let negative  = -value
// console.log(negative)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2) //power of 2 
// console.log(2/3)
// console.log(2%3) 

let str1 = "hello"
let str2 = " world"
let str3  =  str1+ str2
console.log(str3) // hello world

console.log("1"+2) //12
console.log(1+"2") //12
console.log("1"+"2")//12
console.log("1"+2+2) // 122 
console.log(1+2+"2") // 32 print krega // sab norms hote h we can't change these norms (ecma script me)

// use parenthesis as much as possible

// bad practice - console.log(true) -- it will return true
// console.log(+true) = 1
//console.log(true+) = error
//console.log(+"") = empty string false dega to output  = 0