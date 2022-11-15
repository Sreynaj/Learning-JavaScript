console.log('replace(): takes as a parameter the old substring and a new substring.')

let string = 'Jan'
console.log(string)
console.log(string.replace('Jan', 'Jane'))

console.log('\-------------------------')

console.log('charAt(): Takes index and it returns the value at that index')
console.log(string.charAt(0))

console.log('\-------------------------')

console.log('charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index')
console.log(string.charCodeAt(0))
 
console.log('\-------------------------')

console.log('indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1')
console.log(string.indexOf('J'))
console.log(string.indexOf('s'))

console.log('\-------------------------')

console.log('lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1')
console.log(string.lastIndexOf('n'))
console.log(string.lastIndexOf('S'))

console.log('\-------------------------')

console.log('concat(): it takes many substrings and joins them.')
console.log(string.concat(' is', ' 18', ' years' , ' old.'))

console.log('\-------------------------')

console.log('startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).')
console.log(string.startsWith('J'))
console.log(string.startsWith('j'))

console.log('\-------------------------')

console.log('endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).')
console.log(string.endsWith('J'))
console.log(string.endsWith('n'))

console.log('\-------------------------')

console.log('search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.')
console.log(string.search('a'))
console.log(string.search('A'))

console.log('\-------------------------')

console.log('match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.')
console.log(string.match('J'))

console.log('\-------------------------')

console.log('repeat(): it takes a number as argument and it returns the repeated version of the string.')
console.log(string.repeat(10))