const arr = [1,2,3,4,5,6,"muskan",true] // only in square braces and can contain string, boolean also .. arrays in js are dynamic in size and not fixed

// const arr = new Array(1,2,3,4) // aise bhi declare kr skte ho array ko aap
// arr.push(6) // method used to add value in array 
// arr.push("muskaaaan nain")
// arr.pop() // remove the last element in the array

// arr.unshift(9) // add element in first 
// arr.shift() //  removed the first element 

// console.log(arr.includes(4)) //  return true if array contains this element 
// console.log(arr.indexOf(6)) // return index of element and returns -1 if  the element does not exist

// const Naya = arr.join() // change data type of array
// console.log(Naya)
// console.log(arr)
// console.log(typeof(Naya))

// !!!!!!!!!!!!!!!!!!!!!!!!!! SLICE AND SPLICE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log("A", arr) //  first original array 

const my1 = arr.slice(1,3)
console.log(my1)

console.log("B", arr) // array after slice
const my2 = arr.splice(1,3)
console.log("C",arr) // arr after splice 
console.log(my2)

// MAJOR DIFFERENCE IS SLICE DOESN'T CHANGE ORIGINAL ARRAY WHERE SPLICE DOES .... and slice return shallow copy whereas splice changes the content in array .
