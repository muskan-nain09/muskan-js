const arr=["js","ml","html","css"]

// arr.forEach(function(i){ // for each loop and isme function ka naam nahi daalte function k andar iteration krne k liye daalte h
//     console.log(i)
// })

// it can be done using arrow function too 
arr.forEach((i)=>{
    // console.log(i)
})

//ek or method

function print(i){ // ek or function k andar print krvake for each m as a parameter pass krdo 
    // console.log(i)
}
arr.forEach(print) // uska refernece dena h naaki arr.forEach(print()) krna h 

arr.forEach((i,index,arr)=>{ // isme jruri nahi ki i ki pass kra iteration k liye we can also get index and whole array
//     console.log(i,index,arr)
})

// array of objects pr iteration

const arr2 = [
    {
        language:"python",
        shortform:"py"
    },
    {
        language:"Javascript",
        shortform:"js"
    },
    {
        language:"Hypertext",
        shortform:"html"
    }
]

arr2.forEach((i)=>{
    console.log(`The language is: ${i.language}`)
    console.log(`The shortform is: ${i.shortform}`)
})

// also if we want to store for each in variable still it won't return any value 

// const values = arr2.forEach((i)=>{
//     console.log(`The language is: ${i.language}`)
//     console.log(`The shortform is: ${i.shortform}`)
//     // return i.language even after return statement it won't return any statement 
// })
// console.log(values)