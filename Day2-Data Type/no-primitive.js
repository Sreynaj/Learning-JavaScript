let nums = [1,2,3]
let numbers = [1,2,3]

console.log(nums == numbers)

let mine = { name: 'Jan', age: 18 , city: "Phnom Penh"}
let alsoMe = { name: 'Jan', age: 18 , city: "Phnom Penh"}

console.log(mine == alsoMe)

//all FALSE because we cannot compare arrays, functions or object.
//To comapre them; below is how 

let num = nums 
let Me = mine 

console.log(num == nums)
console.log(Me == mine)