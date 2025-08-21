const marvel_hero = ['ironman','spiderman', 'hulk']
const dc_hero = ['batman','superman']

// marvel_hero.push(dc_hero) // array k andar ek or array aajaega -- ya fr marvel_hero.concat(dc_hero) -------- they produce same results
// console.log(marvel_hero)
// console.log(marvel_hero[3][1])

//  const all = marvel_hero.concat(dc_hero)
//  console.log(all)

// if more than one two arrays ko concat krna h we can use spread

// const all_heroes = [...marvel_hero, ...dc_hero] // spread method for more than 2 arrays to combine
// console.log(all_heroes)

// const arr = [1,2,3,4,[5,6],[7,[8,9,1]]]
// const naya = arr.flat(Infinity) // yeh infinity ki jgh koi bhi value hoskti h and ye depth hoti h jitna no utni hi array solve hoti jaegi
// console.log(naya)

console.log(Array.isArray("Muskan")) // check whether given input is array or not
console.log(Array.from("Muskan")) // convert this to array
console.log(Array.from({Name:"muskan"})) // yaha hume specify krna hoga ki keys ya values m se kisko array banana h else ye empty hi return krega .. 

const s1 =100
const s2 = 200
const s3= 300

console.log(Array.of(s1,s2,s3)) //  yeh bhi array hi banake dedeta h

// difference in Array.from and Array.of k beech m pdh lena 