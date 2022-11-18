//create a time object 
const now = new Date()
console.log(now)

//Getting full year 
console.log(now.getFullYear())

//Gettinng month 
console.log(now.getMonth())

//Getting dage 
console.log(now.getDate())

//Getting Day 
console.log(now.getDay())

//Getting Hour 
console.log(now.getHours())

//Getting minnutes
console.log(now.getMinutes())

//Getting seconds 
console.log(now.getSeconds())

//Getting time 
console.log(now.getTime())

console.log()

const now1 = new Date()
const year = now1.getFullYear() // return year
const month = now1.getMonth() + 1 // return month(0 - 11)
const date = now1.getDate() // return date (1 - 31)
const hours = now1.getHours() // return number (0 - 23)
const minutes = now1.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56