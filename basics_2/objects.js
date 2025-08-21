// singleton ------> Object.create  -- it means constructor k through

//object literals

const sym = Symbol("key1")
const ob = {
    Name:"muskan",
    "full name" : 'muskan nain', // isko access krne k liye we use effective and doosra tarika
    [sym] : "mykey", // symbol in obj declare krne ka tarika
    age: 21,
    email: "muskan_xd@gmail.com",
    status_active: false
}

// console.log(ob.email) //  ek tarika access krne ka 
// console.log(ob["email"]) // doosra and effective
// console.log(ob[sym]) // symbol k liye we don't need quotations
 
ob.age = 31 // ways to change the value of variable in objects  
console.log(ob['age'])

// Object.freeze(ob) // no one can make changes in object now .. iske baad koi bhi change nai hoga ..........

ob.greeting=function(){
    console.log("Hello object")
}

ob.greetingtwo = function(){
    console.log(`Namaste object ${this.Name}`)
}
console.log(ob.greeting()) // after greeting parenthesis is necessary else u will get undefined
console.log(ob.greetingtwo())