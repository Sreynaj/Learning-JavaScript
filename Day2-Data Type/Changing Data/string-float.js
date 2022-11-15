/* We can convert string float to number using the following methods:

parseFloat()
Number()
Plus sign(+) */ 

let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81

let num1 = '9.81'
let numFloat1 = Number(num)

console.log(numFloat1) // 9.81

let num2 = '9.81'
let numFloat2 = +num

console.log(numFloat2) // 9.81