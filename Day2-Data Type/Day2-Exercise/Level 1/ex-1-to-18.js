/* Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. */

let challenge = '30 Days Of JavaScript'
//#2
console.log(challenge)
//#3
console.log(challenge.length)
//#4
console.log(challenge.toUpperCase())
//#5 
console.log(challenge.toLowerCase())
//#6
console.log(challenge.substring(0,2))
//#7 
console.log(challenge.substring(3,21))
//#8
console.log(challenge.includes('Script'))
//#9
console.log(challenge.split())
//#10
console.log(challenge.split(' '))
//#11
let sMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(sMedia.split('   '))
//#12
console.log(challenge.replace('JavaScript', 'Python'))
//#13
console.log(challenge.charAt(15))
//#14
console.log(challenge.charCodeAt('J'))
//#15
console.log(challenge.indexOf('a'))
//#16
console.log(challenge.lastIndexOf('a'))
//#17
let bcuz = 'You cannot end a sentence with because because because is a conjunction'
console.log(bcuz.indexOf('because'))
//#18
console.log(bcuz.lastIndexOf('because'))
//#19
console.log(bcuz.search('because'))
//#20 
let challenge1 = ' 30 Days Of JavaScript '
console.log(challenge1)
console.log(challenge1.trim(' '))
//#21
console.log(challenge.startsWith(3))
//#22
console.log(challenge.endsWith('t'))
//#23
console.log(challenge.match('a'))
//#24
let challenge2 = ''
console.log(challenge2.concat('30 Days of ' + 'JavaScript'))
//#25
console.log(challenge1.repeat(2))