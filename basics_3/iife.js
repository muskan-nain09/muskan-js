(function me(){ // EXAMPLE OF named IIFE
    console.log("hello world") // IIFE FUNCTIONS  jaha function k upr parenthesis laga k usko call kr skte h 
})(); // semicolon is a mandate to keep coz iife function doesn't know where to stop context

// NOTE: IIFE functions are used to avoid the pollution of variables in global scope with the help of iife variables stay in function and do not interfere in other parts of code also they are immediately invoked

((age)=>{ // arrow function with parameter and it is example of no name IIFE
    console.log(`muskan nain, ${age}`)
})(21); // yaha para ki value dedo 