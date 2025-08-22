// const temp = 40

// if(temp==50){
//     console.log("Temperature is 50")
// }
// else if (temp>50){
//     console.log("Temperature is greater than 50")
// }
// else{
//     console.log("pta nahi temperature shayad 50 se kam h")
// }

// const balance =1000
// if(balance>100) console.log("bhot paisa h") // ye aap direct bhi kr skte h  but not impressive at all 

const user =true
const card = true
const money = false
if(user &&  card){ // or ka bhi use krte h using '||' 
    // console.log("u can buy")
}

// nullish coalescing operator (??): null and undefined 

let val;
// val = 5 ?? 10

// val = null ??10 // 10 assign
// val = undefined ??10 // 10 assign 
val = null ??10 ??20 //  iss case m null se alag jo first value hogi vo assign hojaegi 

// this operator helps when left side is null and undefined .. agar ekk value null ya undefined h to doosri assign krdi jaegi
// console.log(val)

// !!!!!!!!!!!!!!!!!!!!!!!! TERNARY OPERATOR //////////////////////// 

// condition? true: false  ---> it is syntax

const price=100
price >=50? console.log("yes it is") : console.log("no")