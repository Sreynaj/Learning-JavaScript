//#1
let firstName = 'SREYNAJ'
let lastName = "KEB"
let country = 'Cambodia'
let city = "Phnom Penh"
let age = '18'
let isMarried = false
let year = 2022

console.log(typeof(firstName), typeof(lastName), typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year))

//#2.Check if type of '10' is equal to 10
typeof(10)
console.log(typeof(10)==10)

//#3.Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8)==10)

//#4.Boolean value is either true or false.
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true

console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false

//#5
console.log('#5. Boolean')
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')

//#6
console.log('BOOLEAN')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 && 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log()

//#7
console.log('What is the year today?')
const now = new Date()
console.log(now.getFullYear())

console.log('\nWhat is the month today as a number?')
console.log(now.getMonth())

console.log('\nWhat is the date today?')
console.log(now.getDate())

console.log('\nWhat is the day today as a number?')
console.log(now.getDay())

console.log('\nWhat is the hours now?')
console.log(now.getHours())

console.log('\nWhat is the minutes now?')
console.log(now.getMinutes())

console.log('\nFind out the numbers of seconds elapsed from January 1, 1970 to now.')