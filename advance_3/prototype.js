let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.muskan = function(){ //prototype function banana h 
    console.log(`muskan is present in all objects`);
}

Array.prototype.muskan_xd = function(){
    console.log(`muskan says hello`);
}

// heroPower.muskan()
// myHeros.muskan() // array bhi object se hoke jaate h mtlb prototype 
// myHeros.muskan_xd()
// heroPower.muskan_xd() // yaha array wala kaam ni krega kyunki ye object h or iska type array h means array prototype create hua h 

//inheritance

const User = {
    name: "muskan",
    email: "nain@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //prototype old syntax jo locally or globally dono jagah declare ho skta h  (accessing teachingsupport)
}

Teacher.__proto__ = User // yaha teacher ka prototype user ko access kr skta h

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // kon kiski property access kr rha h ( teaching support teacher ki with mehtod of "setPrototypeOf")

let anotherUsername = "muskannain     "

String.prototype.trueLength = function(){ //truelength is name of prototype function
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); // extra space cut hojaegi 
}

anotherUsername.trueLength() //jisko bulaya h uska hi length print hoga

"himynameis".trueLength() //yeh strings jo khud se di hai uski true length isliye they are in inverted commas 
