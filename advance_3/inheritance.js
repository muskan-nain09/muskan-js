class user{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`${this.username}`)
    }
}

class teacher extends user{ // inheritance hojaegi  
       constructor(username,email,pass){
        super(username)
        this.email = email
        this.pass = pass
       }

       addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
    
}

const muskan = new teacher("muskanxd","naimuskan@google.com","21")

muskan.login()

console.log(muskan instanceof User);

