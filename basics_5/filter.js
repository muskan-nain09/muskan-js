const arr=[1,2,3,4,5,6,7,8,9,10]
const val = arr.filter((i)=> i>4) //filter returns value unlike for each 
console.log(val)

// or we can do like  : const val = arr.filter((i)=>{
// return i>4})  // return is necessary coz it is explicit once u used {} this parenthesis as scope started
//console.log(val)

//using empty array: 

// const n_arr= [] // same output as above like filter but complex and bada h
// arr.forEach((i)=>{
//     if(i>4){
//         n_arr.push(i)
//     }
// })
// console.log(n_arr)