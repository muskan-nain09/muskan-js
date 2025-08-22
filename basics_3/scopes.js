let a = 20 // global scope 

if(true){ // local scope
    const a = 30
    let b = 20
    var c = 40
}

// console.log(a)
// console.log(b)
// console.log(c) // iska output print hoga kyunki var use kiya h isliye var is denied to use kyunki scope k bahar bhi it works and it should not 

// NOTE: Windows and node k andar scopes alag hote h 

function one(){
    const username = "muskan"
    
    function two(){
        const familyname = "nain"
        // console.log(username) // nested can access variable of the function in which it is nested
    }
    // console.log(familyname) -- it will not work as it is accessed outside the scope of nested (child) function
    two() // if this is not called one will not give any output 
}
one()

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! POINTS TO KEEP IN MIND !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

console.log(add(5))
function add(n){
    return n+1
}

// console.log(addtwo(6)) // this time it will give an error coz humne function ko variable m store kra h to yaha output nho aaega 
// const solve = function addtwo(m){
//     return m+1
// }