class User{
    constructor(username){
        this.username=username
    }

    login(){
        console.log(`${this.username}`)
    }

    static Id(){
        return `1234`
    }
}

const me = new User("muskan")
console.log(me.Id()) //  it will produce error because static keyword is used so u can't access that method and not even child class can access it 

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const marks = new teacher('muskan',"muskanxd@mail.com")
console.log(marks.Id()) // error as child can also not access the static keyword method 