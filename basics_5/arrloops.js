// ["","",""] array can be of empty string
// [{},{},{}] array can be of objects 

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% FOR OF LOOPS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 

// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)
// }
 
const greetings ="hello world!"
for( const i of greetings){
    // console.log(` Each character is: ${i}`)
}

//Maps - these have only single key value pair means no repeatition and maps keep order in mind in which they are written and maps are objects that has key value pairs

const map = new Map()
map.set("In","India")
map.set("UAE", "Dubai")
map.set("UK","London")
map.set("UK","London") // it won't be shown in output as duplicate values are not shown 

// console.log(map)

// for of loop in this: 

for (const [key,value] of map) { // this syntax helps to separate key and value else it will show array of both key value like map (bs array form m)
    console.log(key,":-",value)
}

// this above method of iteration doesnt work in objects they have different method