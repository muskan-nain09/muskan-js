class User{
    constructor(email,username){
        this.email= email
        this.username = username
    }

    get email(){ // name will be same jo constructor m diya h
        return `${this._email.toUpperCase()}` // ek naya variable declare kr skte ho  // agar get h to confirm set bhi hoga 
    }

    set email(value){
        this._email = value // jo cheez get m hogi vahi value set m hogi .... (we changed the name of variable kyunki set or consructor dono hi value set krne ka kaam krenge or jab dono sath run honge to call stack will be exceeded and it will throw issues )
    }
}

const me = new User("nainmuskan@google.com",'Muskan_xd')
console.log(me.email)


// older method  - property based // also underscore shows that we are trying to make that property private 

/*

function User(email, password){
    this._email = email; // direct aise hi define krte h isme property aap 
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const me = new User("muskan@ai.com", "chai")

console.log(me.email);


*/

// older method - objects based syntax

/*

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // alternative of new - it is a factory function 
console.log(tea.email);

*/