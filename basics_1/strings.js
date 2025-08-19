const name_ = "Muskan"
const age = 21

// console.log(name_ + age + " Hi" ) // prac not recommended at all 
// console.log(`Hello my name is: ${name_} and my age is: ${age}`);

const Naam = new String("muskanxd")
// console.log( Naam)
// console.log(Naam[0]) // iss index pr jo letter hoga vo return hoga 
// console.log(Naam.toUpperCase())
// console.log(Naam.charAt(3))
// console.log(Naam.indexOf("n"))

// let Naam2 = Naam.substring(0,3) // isme sirf positive no ho skte h 
// console.log(Naam2)

let Naam2 = Naam.slice(-6,2)// isme negative bhi hoskte h and reverse way m return krdega ye value
console.log(Naam2); // iska result = naku 

// let Naam3 = "    muskaaan   "  //  trim extra spaces
// console.log(Naam3)
// console.log(Naam3.trim())

const url = "https://muskan_nainxd%%20nainmuska"
console.log(url.replace("%%", "-"))
console.log(url.includes("muskan_nain"))

console.log(url.split("%")) // iska syntax hoga split("separator", "limit")