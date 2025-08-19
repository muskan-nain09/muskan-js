let d = new Date()
// console.log(d)
// console.log(d.toString()) // string ,m convert 
// console.log(d.toDateString()) //  date aajaegi
// console.log(d.toISOString()) // api se integrate krte hue 
// console.log(d.toJSON()) // json understandable  format
// console.log(d.toLocaleString()) //  to just date and time 
// console.log(d.toLocaleDateString()) //just date 
// console.log(d.toTimeString()) //just time 
console.log(typeof d) // date ka datatype object hota h

// let Nayi =  new Date(2024, 1, 15)
// console.log(Nayi.toString())

// let Nayi = new Date(2023, 0 , 24, 5 , 8)
// let Nayi = new Date("2024-01-12") // in yy-mm-dd .. month zero se hota h or simple jo upr h usme 0 se 
let Nayi = new Date("1-14-2024") // indian format 
console.log(Nayi.toLocaleString()) 

let timestamp = Date.now() // means the no of milliseconds passed from 1970 when date was invented (date.now)
console.log(timestamp) // current time in milliseconds 
console.log(Nayi.getTime())
console.log(Math.floor(Date.now()/1000)) // seconds m conversion krne k lie from milliseconds 


let date = new Date()

// console.log(date)
// console.log(date.getMonth()+1)
// console.log(date.getDay())

date.toLocaleString("default", { // format kr skte h hum
    weekday : "long",
    timeZone: ''
})