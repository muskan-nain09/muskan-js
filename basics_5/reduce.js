const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currentval) { //accumulator ek khali value hoti  h jisme current value add hoti rehti h 
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
//     return acc + currval
// }, 0) // yaha jo 0 has accumulator ki value h agar or koi bhi hoti to accumulator ki value vo set hojati 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);