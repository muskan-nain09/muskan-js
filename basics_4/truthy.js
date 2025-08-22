// const email = "muskan@gmail.com"
// if(email){         // yaha koi comparison nhi diya still it will print values coz some values are truthy and falsy
//     console.log("email found")
// } else{
//     console.log("email doesn't exist")
// }

// falsy values 
// false, 0 , -0, BigInt  0n , "" (empty string) , null, undefined, NaN

// remaining are truthy values - "0" , "false" , " " (space h ) , [] , {} , function(){} - ye ek empty function h 

const users=[]
if (users.length===0){ // to check if array is empty
    console.log("array is empty")
}

const obj = {}
if(Object.keys(obj).length ===0){ // to check if object is empty
    console.log("obj is empty")
}