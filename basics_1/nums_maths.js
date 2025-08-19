// const score = 200
// console.log(score) // isme sida return krta without telling type, ye primitive type h so stack memory used 

// let s = new Number(100) // iska fayda h ki ye output m btata h ki type kya h or usi m return krta h or ye object h  # heap memory used 
// console.log(s)

// console.log(s.toFixed(3)) // get the no in decimal

// let n = 1234.766
// console.log(n.toPrecision(4))

// let h = 10023453
// console.log(h.toLocaleString("en-IN")) // ye value m comma le aate h ,, en-In for indian standards

//+++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++ // 

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2)) // yeh round off k baad next value hi lega that i 5
// console.log(Math.floor(4.9)) // ye round of k baad bhi lower value lega matlb 4 
// console.log(Math.min(2,5,3,1,10))
// console.log(Math.max(2,3,4,5,6,100))

console.log(Math.random())
console.log((Math.random()*10)+1) // jis range tk chahiye usi se multiply or +1 isliye kyunki sometimes value 0 se multiply hoti h to 0 nhi chahie 

// or agar kisi specific range m chahiye: 

let max =20
let min = 10

console.log(Math.floor(Math.random() * (max-min+1) + min)) // floor taaki point m lower aaye .. random taaki random no aaye or max-min+1 isliye taaki zero na ho or uss range m ho or +min taaki uss range se upr ya min k equal aaye usse kam ni