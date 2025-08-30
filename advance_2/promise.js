const promise1 = new Promise(function(resolve,reject){ // promise k do part hote h ek promise create krna na and second consume krna
        setTimeout(function(){
            console.log("Async task is completed")
            resolve() // imp if u r using then 
        },2000)
}) 

promise1.then(function(){ // then ka direct connection hota h resolve k saath 
    console.log("promise is consumed")
})

// Method 2 : 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task2 is completed")
        resolve()
    },2000)
}).then(function(){
    console.log("Promise 2 is consumed")
})



const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise 3 is completed")
        resolve({username:"muskan", age:21})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})



const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true // ek baar false se chalaoge to error wala part skip hojaega
    if(!error){
        resolve({username:"muskan", email:'nainmuskan@example.com'})
    }
    else{
        reject("Unexpected Error Caught")
    }
    },1000)
})

promise4.then((user)=>{ // example of chaining 
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){ // jo rejection aare h unko handle krna h
    console.log(error)
}).finally(()=>{console.log('Promise is either resolved or rejected')})              // default jo humesha execute hoga hi hoga and asks whether the task is completed or not 

const Promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = true // ek baar false se chalaoge to error wala part skip hojaega
    if(!error){
        resolve({username:"muskan", password:"4562732"})
    }
    else{
        reject("JS Crashed")
    }
    },1000)
});

async function consumingPromise5(){ // lekin error true h to catch bhi lagega or ye syntax is alternative of then catch jo upr likha hua h
      try {
      const resp = await Promise5
      console.log(resp)
      } catch (error) {
        console.log(error)
      }
}
consumingPromise5()


// async function Users(){ using try catch 
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()  // string se json m convert krdiya or ye bhi time lega conversion m isliye hume await lagana pdega 
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// users()

//------------------------------ using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((userssss)=>{console.log(userssss)}).catch((error)=>console.log(error))

