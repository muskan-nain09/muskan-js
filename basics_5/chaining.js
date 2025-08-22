const arr= [1,2,3,4,5,6,7,8]

// const naya = arr.map((i)=>{return i+10})

//concept of chaining 
const naya = arr.map((i)=> i+10).map((i)=>i*10).filter((i)=> {return i>120})//.map().map bhi laga skte h isko chaining kehte h 
console.log(naya)