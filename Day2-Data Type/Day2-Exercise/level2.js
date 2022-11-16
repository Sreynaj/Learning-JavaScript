//#1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//#2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
//#3
typeOf = '10'
console.log(typeOf == 10)

//#4
parseFloat('9.8')
console.log(parseFloat == 10)
console.log(Math.ceil(parseFloat))

//#5 
let py = 'Python'
let jar = 'Jargon'
console.log(py.includes,jar.includes('on'))

//#6
let Jargon = 'I hope this course is not full of jargon.'
console.log(Jargon.includes('jargon'))

//#7 
let random = Math.floor(Math.random()*101)
console.log(random)

//#8
let random1 = Math.floor(Math.random()*(101-50)+50) 
console.log(random1)

//#9
let random2 = Math.floor(Math.random()*256)
console.log(random2)

//#10 
let java = 'JavaScript'
let number = Math.floor(Math.random()*10)
console.log(java.charAt(number))

//#11
console.log('1 \t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

//#12
let sub = 'You cannot end a sentence with because because because is a conjuction'
console.log(sub.substr(0,30,),sub.substr(55))