console.log("\length: The string length method returns the number of characters in a string included empty space.")

let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'SREYNAJ KEB'
console.log(firstName.length)  // 8

console.log("\Accessing characters in a string:We can access each character in a string using its index.")

let string = 'SREYNAJ KEB'
let firstLetter = string [0]
console.log(firstLetter)
//OR
console.log(string[0])

let lastLetter = string[10]
console.log(lastLetter) //B
//OR 
let lastIndex = string.length - 1
console.log(string[lastIndex]) //B
console.log(lastIndex) //9


console.log("\toUpperCase(): this method changes the string to uppercase letters.")
let myName = 'Sreynaj Keb'
console.log(myName.toUpperCase())

console.log("\toLowerCase(): this method changes the string to lowercase letters.")
console.log(myName.toLocaleLowerCase())

console.log("\substr(): It takes two arguments, the starting index and number of characters to slice.")
console.log(myName.substr(7,8))

console.log("\substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.")
console.log(myName.substring(0,7))

console.log('\split(): The split method splits a string at a specified place.')
console.log(myName.split())
console.log(myName.split(' '))
console.log(myName.split(''))
console.log(myName.split(', '))

console.log("\trim(): Removes trailing space in the beginning or the end of a string.")
console.log(myName.trim())

console.log("\includes(): It takes a substring argument and it checks if substring\
argument exists in the string. includes() returns a boolean. If a \
substring exist in a string, it returns true, otherwise it returns false.")

let string1 = '30 Days Of JavaScript'

console.log(string1.includes('Days'))     // true
console.log(string1.includes('days'))     // false - it is case sensitive!
console.log(string1.includes('Script'))   // true
console.log(string1.includes('script'))   // false
console.log(string1.includes('java'))     // false
console.log(string1.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false