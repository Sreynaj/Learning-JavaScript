// && ampersand operator example

const check = 4 > 3 && 10 > 5         // true && true -> true
const check1 = 4 > 3 && 10 < 5         // true && false -> false
const check2 = 4 < 3 && 10 < 5         // false && false -> false

console.log(check,check1,check2);
// || pipe or operator, example

const check3 = 4 > 3 || 10 > 5         // true  || true -> true
const check4 = 4 > 3 || 10 < 5         // true  || false -> true
const check5 = 4 < 3 || 10 < 5         // false || false -> false
console.log(check3,check4,check5);
//! Negation examples

let check6 = 4 > 3                     // true
let check7 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
console.log(check6,check7,isLightOff,isLightOn);