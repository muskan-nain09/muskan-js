const obj = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(obj) //  it will show all hidden property of this object and it will show writable enumerable and configuration as false which means n u can't change it as it is very strongly hardcoded 


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) // yaha value dekha jaye to overwrite honi chahiye pr vo nhi hoti and it remains what it is 

// for the object u will create .. u can have control of all enumerable and all..

const muskan = {
    name :'muskanxd',
    age:21,

    class:function(){
        console.log("graduated")
    }
}
console.log(Object.getOwnPropertyDescriptor(muskan,"name")) // jiski property chahiye usko btana and not the whole obj for whole obj it will be undefined as output

Object.defineProperty(muskan,'name',{ // jis bhi object property ki property change and set krni h and for one property .. defineProperty lagega and multiple k liye defiineProperties
   // writable:false,
    enumerable: false // isse output m name show nahi hoga baaki sb properties hi show hongi 
})

for (const [key,value] of Object.entries(muskan)) { // for of is easy for objects
    if(typeof value !== 'function'){
        console.log(`${key},${value}`)
    }
}