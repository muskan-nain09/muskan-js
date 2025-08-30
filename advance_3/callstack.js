function Setuser(username){
    this.username = username
}

function createUser(username,email,password){
    //Setuser(username) // yeh naam nhi dega output m
    Setuser.call(this,username) // this will give name as output jo humne out of function declare kra h or yaha bhi this lagana pdega varna yaha call hoga pr output m username show nhi hoga  
    // Setuser.call(this.username) // it will not work also 
    this.email= email
    this.password = password
}
const details = new createUser("muskan",'muskannain@gmail.com','1233')
console.log(details)