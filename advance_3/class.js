class user{
    constructor(username,email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    passwords(){
        return `${this.pass}muskanxd`
    }

    namechange(){
        return `${this.username.toUpperCase()}`
    }
}
let USER = new user("muskan",'nainmuskan@google.com','2309')
console.log(USER.passwords())
console.log(USER.namechange())