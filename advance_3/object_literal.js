const user={
    name:"muskan",
    age:21,

    getuserDetails: function(){
        // console.log("userdetails fetched")
        console.log(`username is: ${this.name}`) // this k bina chalaya agar to error aaega kyunki context ka nahi pta usko .. this krke we can tell the context 
        console.log(this) // ye saara object print krvadega
    }
}
console.log(user.name)
console.log(user.getuserDetails())
console.log(this) // yaha empty aaega global context m

function user(username, age, islogged){
    this.username = username // yaha jo left hand side hoga it will be variable
    this.age =age 
    this.islogged = islogged

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const users = user("muskan",21,true)
// const users2 = user("nain",20,false) //  yeh likhne k baad jo console.log m value hogi vo iski hogi as it was overwritten

// for this problem to be solved :

const users = new user("muskan",21,true)
const users1 = new user("nain",20,false) 
console.log(users)
console.log(users1) // ab dono k alag outputs print honge no problem of overwriting 

// new keyword creates an empty object that is empty parenthesis and with this keyword a constructor is called  
// this keyword se arguments inject hojate h 
//constructor is nothing but just a reference of object 

//instanceof is an operator used to check whether an object belongs to a particular class

const users3 = new user("abc",32,true)
console.log(users3 instanceof user)